/**
 * Test Suite: Clinic Admin - Add New Staff
 *
 * Purpose:
 * - Validate the process of adding a new staff member in the system.
 * - Ensure that all required fields, validations, and duplicate handling
 *   work as expected.
 *
 * Scenarios Covered:
 *
 * Positive Flows:
 * 1. Add a new staff member successfully by filling all mandatory details.
 *    - Basic info (first name, last name, email).
 *    - Staff registration, regulatory details, and healthcare info.
 *    - Expertise, qualifications, languages, and working hours.
 *    - Finalize and send an invitation.
 *
 * Negative Flows:
 * 2. Show validation errors when required fields are missing.
 * 3. Prevent adding staff with duplicate email (system should alert).
 * 4. Show error when entering invalid email format.
 *
 * Expected Results:
 * - A staff member can be added successfully with all valid details,
 *   and a success message "Invitation has been sent" should appear.
 * - Missing required fields should block progress and display validation messages.
 * - Duplicate email should show an error with options for handling existing user.
 * - Invalid email format should be caught and display an appropriate error message.
 */

import { faker } from '@faker-js/faker';

describe('Clinic Admin - Add New Staff', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); // login as clinic admin
    cy.url().should('include', '/dashboard');
  });

  it('should add a new staff member successfully', () => {
    // -----------------------------
    // Navigate to Add Staff
    // -----------------------------
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.contains('.d-inline-flex', 'Add New Staff', { timeout: 10000 })
      .click();
    // -----------------------------
    // Fill Basic Information
    // -----------------------------
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(email);

    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();
    cy.get('.swal2-confirm').click(); 

    
    // Staff Registration dropdown
    cy.get('app-staff-registration > .form-body > form.ng-untouched > .row > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container').first().click();
    cy.get('.ng-option').contains('License/Registration').click();

    cy.get('.ng-invalid.ng-touched > .row > :nth-child(6) > .form-group > .form-control').type(
      'REG-' + faker.number.int(99999)
    );

    // Registration Status
    cy.get('.ng-invalid.ng-touched > .row > :nth-child(7) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Active').click();

    // Regulatory Body
    cy.get(':nth-child(8) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Regulatory Body 1').click();

    // Province / State
    cy.get('.ng-invalid.ng-touched > .row > :nth-child(10) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Alberta').click();

    // City
    cy.get(':nth-child(11) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Airdrie').click();
    cy.contains('button', 'Add').click();

    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();
    // cy.get('.swal2-confirm').click();

    // Staff Healthcare provider No
    cy.get('app-staff-health-care > .form-body > form.ng-untouched > .row > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Billing No').click();

    cy.get('.ng-invalid.ng-touched > .row > :nth-child(5) > .form-group > .form-control').type(
      'BN-' + faker.number.int(99999)
    );

    // Healthcare Number Status
    cy.get('.ng-invalid.ng-touched > .row > :nth-child(6) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Regulatory Body 1').click();

    cy.get('app-staff-health-care > .form-body > form.ng-invalid > .row > :nth-child(7) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Active').click();

    // Province/State
    cy.get(':nth-child(9) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Alberta').click();

    // City
    cy.get('app-staff-health-care > .form-body > .ng-invalid.ng-touched > .row > :nth-child(10) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Airdrie').click();

    // cy.contains('button', 'Add').click();
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();


    // -----------------------------
    // Area of Expertise
    // -----------------------------
    cy.get('app-administrative-expertise > .form-body > form.ng-untouched > .row > :nth-child(2) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Physician').click();

    cy.get('.ng-invalid.ng-dirty > .row > :nth-child(3) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Administrative Medical Assistant').click();

    cy.get('form.ng-touched > .row > :nth-child(4) > .form-group > .form-control').type(
      faker.lorem.sentence()
    );

    cy.get(':nth-child(5) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Yes').click();
    // cy.contains('button', 'Add').click();

    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();


    // -----------------------------
    // Qualification & Education
    // -----------------------------
    cy.get('app-administrative-qualification > .form-body > form.ng-untouched > .row > :nth-child(2) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Associate Degree').click();

    cy.get('.ng-invalid.ng-touched > .row > :nth-child(3) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Orthoptist').click();

    cy.get('app-administrative-qualification > .form-body > .ng-invalid.ng-touched > .row > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('University of Toronto').click();

    cy.get('input[formcontrolname="from_tenure"]').type('2022-01-01');
    cy.get('input[formcontrolname="to_tenure"]').type('2025-01-01');            

    // cy.contains('btn.btn-primary.btn-shadow.g-form-primary-btn', 'Add').click();
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();


    // -----------------------------
    // Languages
    // -----------------------------
    cy.get('app-administrative-language > .form-body > form.ng-untouched > .row > .col-lg-6 > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('English').click();
    // cy.contains('button', 'Add').click();
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();


    // -----------------------------
    // Working Hours
    // -----------------------------
    cy.get('form.ng-untouched > .row > :nth-child(2) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Type A').click();

    cy.get('.ng-invalid.ng-touched > .row > :nth-child(3) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('Sunday').click();

    cy.get('.ng-invalid.ng-dirty > .row > :nth-child(4) > .form-group > .form-control').type('02:00');
    cy.get('input[formcontrolname="to_time"]').type('14:00');

    cy.get('app-administrative-working-hours > .form-body > .ng-invalid.ng-dirty > .row > :nth-child(5) > .form-group > .form-control').type('04:00');
    cy.get('input[formcontrolname="to_time"]').type('16:00');

    cy.get('app-administrative-working-hours > .form-body > .ng-invalid.ng-touched > .row > :nth-child(6) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').contains('UTC').click();

    // cy.contains('button', 'Add').click();
    // cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();


    // -----------------------------
    // Final Save / Confirmation
    // -----------------------------
    cy.contains('button.d-inline-flex.align-items-center.btn.btn-primary.btn-shadow.ng-star-inserted', 'Send Invite', { timeout: 10000 }).click();
    cy.contains('Invitation has been sent', { timeout: 20000 })
      .should('be.visible');

    // cy.get('.swal2-confirm').click();

    cy.log('Test Case Passed: Staff added successfully');
  });

  it('should show validation errors when required fields are missing', () => {
    // cy.contains('.d-inline-flex', 'Add New Staff').click();
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.contains('.d-inline-flex', 'Add New Staff', { timeout: 10000 })
      .click();

    // Try to proceed without entering any details
    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert required field errors
    cy.contains('Value is required').should('be.visible');
    cy.contains('Value is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
  });

  it('should prevent adding staff with duplicate email', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const duplicateEmail = "te1@yopmail.com"; // use a known email in DB

    // cy.contains('.d-inline-flex', 'Add New Staff').click();

    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.contains('.d-inline-flex', 'Add New Staff', { timeout: 10000 })
      .click();

    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(duplicateEmail);

    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert duplicate email error
    cy.contains('This user already exists in system.Do you want to add this existing user?').should('be.visible');
  });

  it('should show error for invalid email format', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    // cy.contains('.d-inline-flex', 'Add New Staff').click();
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.contains('.d-inline-flex', 'Add New Staff', { timeout: 10000 })
      .click();

    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type('invalidEmail');

    cy.contains('.btn-pill.btn', 'Next').click();

    // Assert invalid email error
    cy.contains('Enter a valid email').should('be.visible');
  });
});
