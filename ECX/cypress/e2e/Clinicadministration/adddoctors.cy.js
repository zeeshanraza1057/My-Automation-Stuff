// import { faker } from '@faker-js/faker';

/**
 * Test Suite: Clinic Admin - Add New Doctor
 *
 * Purpose:
 * - Validate the workflow of adding a new doctor as a clinic admin.
 * - Ensure all mandatory fields, validations, and workflows are correctly implemented.
 *
 * Scenarios Covered:
 *   Positive Flow:
 *    1. Add a new doctor with all valid details.
 *
 *   Negative Flows:
 *    2. Show validation errors when required fields are missing.
 *    3. Prevent adding a doctor with a duplicate email.
 *    4. Show error when invalid email format is entered.
 *
 * Expected Results:
 * - Successful doctor creation should display a confirmation message.
 * - Required fields should trigger proper error messages.
 * - Duplicate or invalid inputs should be handled gracefully.
 */

import { faker } from '@faker-js/faker';

describe('Clinic Admin - Add New Doctor', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); // login as clinic admin
    cy.url().should('include', '/dashboard');
  });

  it('should add a new doctor successfully', () => {
    // Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Click Add New Doctor
    cy.contains('button', 'Add New Doctor', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Generate doctor details
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    // Fill in basic details
    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(email);

    // Click Next
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();

 // Assert success message & confirm
    cy.contains('Doctor Created Successfully', { timeout: 10000 })
      .should('be.visible');
    cy.get('.swal2-confirm', { timeout: 10000 }).click();

    // -----------------------------
    // Doctor Registration Section
    // -----------------------------
    cy.get('input[formcontrolname="state_optometry_license"]').type('OPT' + faker.number.int(10000), { force: true });
    cy.get('input[formcontrolname="npi"]').type(faker.number.int({ min: 1000000000, max: 9999999999 }).toString());
    cy.get('input[formcontrolname="dea_no"]').type('DEA-' + faker.string.alphanumeric(6).toUpperCase());
    cy.get('input[formcontrolname="state_controlled_substances_registration"]').type('SCR-' + faker.string.alphanumeric(6));
    cy.get('input[formcontrolname="professional_liability_insurance"]').type('PLI-' + faker.number.int(99999));
    cy.get('input[formcontrolname="medicare_provider_no"]').type('MED-' + faker.number.int(99999));
    cy.get('input[formcontrolname="medicaid_provider_no"]').type('MCD-' + faker.number.int(99999));
    cy.get('input[formcontrolname="ein"]').type(faker.number.int(999999999).toString());
    cy.get('form.ng-dirty > .d-flex > .btn', { timeout: 10000 }).click();
    cy.get('.swal2-confirm', { timeout: 10000 }).click();
    cy.contains('.btn-pill.btn', 'Next').click();

    // -----------------------------
    // Healthcare Provider Numbers
    // -----------------------------
    // Random selects from dropdowns

    cy.get(':nth-child(1) > :nth-child(5) > .form-group > .font-small-1 > .ng-select-container', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click();

    cy.get('.ng-option', { timeout: 10000 })
      .first()
      .click();


    cy.get('input[formcontrolname="billing_number"]').type('BN-' + faker.number.int(99999));

    cy.get(':nth-child(7) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').first().click(); // Regulatory Body

    cy.get('.ng-invalid.ng-touched > :nth-child(1) > :nth-child(8) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').first().click(); // Healthcare Number Status

    cy.get(':nth-child(10) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').first().click(); // Province/State

    cy.get(':nth-child(11) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').first().click(); // City

    cy.contains('.btn-pill.btn', 'Next').click();

        // ---- Working Hours ----
    cy.get('app-doctor-working-hours > :nth-child(1) > form.ng-pristine > .row > :nth-child(2) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option-label').contains('Normal Working Hours').click({ force: true });
    cy.get('.ng-invalid.ng-touched > .row > :nth-child(3) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option-label').contains('Monday').click({ force: true });
    cy.get('input[formcontrolname="start_date"]').type('2025-09-12');
    cy.get('input[formcontrolname="end_date"]').type('2025-09-20');
    cy.get('input[formcontrolname="from_time"]').type('09:30').should('have.value', '09:30');
    cy.get('input[formcontrolname="to_time"]').type('21:30').should('have.value', '21:30');
    cy.get('.ng-invalid.ng-touched > .row > :nth-child(8) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option-label').contains('UTC-07:00').click({ force: true });
    cy.get('app-doctor-working-hours > :nth-child(1) > form.ng-touched > .d-flex > .btn').click({ force: true });
    cy.get('.swal2-confirm').click();
    cy.contains('button', 'Next').click();

    // -----------------------------
    // Consent & Compliance
    // -----------------------------
// Step 1: Click Next after Terms of Use/Service

// Step 2: Fill "Terms of Use/Service" text field
cy.contains('a.p-tabview-nav-link', 'Privacy Policy', { timeout: 20000 })
  .click({ force: true });

cy.get('.ql-editor', { timeout: 20000 })
  .first()
  .click({ force: true })
  .clear({ force: true })
  .type(faker.lorem.sentence(), { force: true });

cy.contains('a.p-tabview-nav-link', 'Terms of Use/Service', { timeout: 50000 })
  .click({ force: true });

cy.get('.ql-editor', { timeout: 50000 })
  .eq(1)
  .first()
  .click({ force: true })
  // .clear({ force: true })
  .type(faker.lorem.sentence(), { force: true });

// Step 3: Switch to "Compliance with Healthcare laws" tab
cy.contains('a.p-tabview-nav-link', 'Compliance with HealthCare laws', { timeout: 20000 })
  .click({ force: true });

// Fill its text field
cy.get('.ql-editor', { timeout: 20000 })
  .eq(2) // second editor
  .click({ force: true })
  // .clear({ force: true })
  .type(faker.lorem.sentence(), { force: true });

// Step 4: Switch to "Provision of Accurate Data" tab
cy.contains('a.p-tabview-nav-link', 'Provision of Accurate Data', { timeout: 20000 })
  .click({ force: true });

// Fill its text field
cy.get('.ql-editor', { timeout: 20000 })
  .eq(3) // third editor
  .click({ force: true })
  // .clear({ force: true })
  .type(faker.lorem.sentence(), { force: true });
cy.get('#p-tabpanel-3 > .row > .col-md-4 > .btn').contains('Save').click();
cy.get('.swal2-confirm').click();

    // -----------------------------
    // Final - Send Invite
    // -----------------------------
    cy.contains('button', 'Send Invite', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('.swal2-confirm').click();

    // Success message in runner log
    cy.log('Test Case Passed: Doctor Registration form filled successfully');

  });

  it('should show validation errors when required fields are missing', () => {
     cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Click Add New Doctor
    cy.contains('button', 'Add New Doctor', { timeout: 10000 })
      .should('be.visible')
      .click();

    // cy.contains('button', 'Add New Doctor').click();

    // Try clicking Next without filling fields
    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert validation errors
    cy.contains('First name is required').should('be.visible');
    cy.contains('Last name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
  });

  it('should prevent adding a doctor with duplicate email', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const duplicateEmail = "zeeshan.raza@axelliant.com"; // use existing email

    // cy.contains('button', 'Add New Doctor').click();
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Click Add New Doctor
    cy.contains('button', 'Add New Doctor', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Fill in details with duplicate email
    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(duplicateEmail);

    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert error message
    cy.contains('This user is already associated.').should('be.visible');
  });

  it('should show error for invalid email format', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    // cy.contains('button', 'Add New Doctor').click();
     cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Click Add New Doctor
    cy.contains('button', 'Add New Doctor', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Fill with invalid email
    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type('invalidEmail');

    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert validation error
    cy.contains('Enter a valid email').should('be.visible');
  });
});

