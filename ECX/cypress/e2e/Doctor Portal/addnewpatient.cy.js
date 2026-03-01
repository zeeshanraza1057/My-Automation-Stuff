/**
 * Test Suite: Doctor Portal - Add New Patient
 *
 * Purpose:
 * - Validate patient registration flow including medical history, insurance, and additional info.
 * - Ensure required fields, duplicate handling, and email format validations work correctly.
 *
 * Scenarios Covered:
 *
 * Positive Flow:
 * 1. Add a new patient with medical history, insurance info, and additional details successfully.
 *
 * Negative Flows:
 * 2. Show validation errors when required fields are missing.
 * 3. Prevent patient creation when using an already registered email.
 * 4. Show error message when an invalid email format is entered.
 *
 * Expected Results:
 * - A new patient should be created successfully when valid data is provided.
 * - Relevant validation errors should be shown when required fields are missing or invalid.
 * - System should prevent adding duplicate patients by email.
 */

import { faker } from '@faker-js/faker';

describe('Doctor - Add New Patient', () => {
  beforeEach(() => {
    cy.loginAs('doctor'); // login as doctor
    cy.url().should('include', '/dashboard');
  });

  it('should add a new patient with medical history successfully', () => {
    // Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Patient menu
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Add New Patient
    cy.contains('span.vsm-title', 'Add New Patient', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Generate unique patient details using faker
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    // Fill in patient details
    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(email);

    // Go to next step
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).should('be.visible').click();

    // Assert success message & handle popup
    cy.contains('Patient created successfully', { timeout: 10000 })
      .should('be.visible');
    cy.get('.swal2-confirm.swal2-styled', { timeout: 10000 }).click();

    // -----------------------------
    // Medical History Section
    // -----------------------------

    // Existing Medical Condition - Condition Type
    cy.get('app-existing-medical-condition > form.ng-untouched > .form-body > :nth-child(1) > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(5) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();
    // Select Eyecare Condition Sub-Type
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(6) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();

    // Set Condition Duration From
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(7) > .form-group > .form-control')
      .type('2024-09-01');   // YYYY-MM-DD format

    // Set Condition Duration To
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(9) > .form-group > .form-control')
      .type('2024-09-17');

    // Select Treatment/Medication
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(8) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();

    // Select Undergone Relevant Tests (choose "No")
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(10) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Select Undergone Relevant Surgeries (choose "No")
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > [ng-reflect-ng-class="[object Object]"] > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Enter Known Allergy
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(12) > .form-group > .form-control')
      .type('Dust Allergy');

    // Select Family History (choose "No")
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(13) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Enter Remarks
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > :nth-child(14) > .form-group > .form-control')
      .type('Patient has mild issues, under observation.');

    // Click Add Button
    cy.get('app-existing-medical-condition > form.ng-valid > .form-body > :nth-child(1) > .d-flex > .btn')
      .click();

    // Assert success message & confirm
    cy.get('.swal2-confirm')
      .click();

    // Go to next step
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).should('be.visible').click();

    // -----------------------------
    // Medical History Section
    // -----------------------------

    cy.get('app-past-medical-history > form.ng-pristine > .form-body > :nth-child(1) > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(5) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();
    // Select Eyecare Condition Sub-Type
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(6) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();

    // Set Condition Duration From
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(7) > .form-group > .form-control')
      .type('2024-09-01');   // YYYY-MM-DD format

    // Set Condition Duration To
    cy.get(':nth-child(8) > .form-group > .form-control')
      .type('2024-09-17');

    // Select Treatment/Medication
    cy.get(':nth-child(9) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-0"] .ng-option-label')
      .contains('Eyecare')
      .click();

    // Select Undergone Relevant Tests (choose "No")
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(10) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Select Undergone Relevant Surgeries (choose "No")
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > [ng-reflect-ng-class="[object Object]"] > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Enter Known Allergy
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(12) > .form-group > .form-control')
      .type('Dust Allergy');

    // Select Family History (choose "No")
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(13) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.get('div[id$="-1"] .ng-option-label')
      .contains('No')
      .click();

    // Enter Remarks
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > :nth-child(14) > .form-group > .form-control')
      .type('Patient has mild issues, under observation.');

    // Click Add Button
    cy.get('app-past-medical-history > form.ng-valid > .form-body > :nth-child(1) > .d-flex > .btn')
      .click();

    // Assert success message & confirm
    cy.get('.swal2-confirm')
      .click();

    // Go to next step
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).should('be.visible').click();

    // -----------------------------
    // Insurance Information
    // -----------------------------
    cy.get(':nth-child(2) > .form-group > .font-small-1 > .ng-select-container')
      .click();
   // Then select the option by text
    cy.contains('.ng-option-label', 'AGA Financial Group Inc.').click({ force: true });

    cy.get('.ng-invalid.ng-touched > .form-body > .row > :nth-child(4) > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.contains('.ng-option-label', 'Medicare').click({ force: true });

    // Set Condition Duration From
    cy.get('input[formcontrolname="effective_date"]').type('2025-09-12', { force: true });

    // Set Condition Duration To
    cy.get('input[formcontrolname="expiration_date"]').type('2026-12-31', { force: true });

    // Enter Remarks
    cy.get('.ng-invalid.ng-touched > .form-body > .row > :nth-child(3) > .form-group > .form-control')
      .type('12345');

    cy.get('.d-flex > #exampleCustomCheckbox1266')
      .click();

    cy.get('.ng-touched.ng-invalid > .form-body > .row > :nth-child(9) > .form-group > .form-control')
      .type('ABC');

    cy.get('.col-12.ng-star-inserted > .form-group > .font-small-1 > .ng-select-container')
      .click();
    cy.contains('.ng-option-label', 'Self').click({ force: true });
    // Click Add Button
    cy.get('form.ng-touched > .form-body > .row > .justify-content-end > .btn')
      .click();

    // Assert success message & confirm
    cy.get('.swal2-confirm')
      .click();

    // Go to next step
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).should('be.visible').click();   

    // -----------------------------
    // Additional Information
    // -----------------------------

     // File Number
    cy.get('input[formcontrolname="file_number"]')
      .clear()
      .type('017223');

    // Preferred Name
    cy.get('input[formcontrolname="preferred_name"]')
      .clear()
      .type('John Flores');

    // Registration Date
    cy.get('input[formcontrolname="registration_date"]')
      .clear()
      .type('2025-04-03'); // use yyyy-MM-dd format for input[type="date"]

    // PHN
    cy.get('input[formcontrolname="phn"]')
      .clear()
      .type('1234567890');

    // Invoice Balance
    cy.get('input[formcontrolname="invoice_balance"]')
      .clear()
      .type('1.2');

    // GP Name
    cy.get('input[formcontrolname="gp_name"]')
      .clear()
      .type('Dr John Flores');

    // Clinic Name (GP Clinic)
    cy.get('input[formcontrolname="gp_clinic_name"]')
      .clear()
      .type('Eyecare Treatment');

    // GP Email
    cy.get('input[formcontrolname="gp_email"]')
      .clear()
      .type('drjohn@yourmail.com');

    // GP Clinic Address
    cy.get('input[formcontrolname="gb_clinic_address"]')
      .clear()
      .type('6391 Eligin St. Celina, Delaware 10299');

    // Ophthalmologist Name
    cy.get('input[formcontrolname="opthal_name"]')
      .clear()
      .type('Dr Sarah Thompson');

    // Ophthalmologist Specialization
    cy.get('input[formcontrolname="opthal_specialization"]')
      .clear()
      .type('Eyecare Treatment');

    // Ophthalmologist Clinic Name
    cy.get('input[formcontrolname="opthal_clinic_name"]')
      .clear()
      .type('Eye Clinic A');

    // Ophthalmologist Clinic Address
    cy.get('input[formcontrolname="opthal_clinic_address"]')
      .clear()
      .type('4820 Maplewood Ave. Brookfield, Illinois 60513');

    // Ophthalmologist Phone
    cy.get('input[formcontrolname="opthal_phone_number"]')
      .clear()
      .type('3191110000');

    // Ophthalmologist Email
    cy.get('input[formcontrolname="opthal_email_address"]')
      .clear()
      .type('drsarah@yourmail.com');

    // Emergency Contact Name
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control')
      .clear({ force: true })
      .type('Emily Carter', { force: true });

    // Emergency Relationship
    cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-control')
      .clear({ force: true })
      .type('Spouse', { force: true });

    // Emergency Email
    cy.get('input[formcontrolname="emergency_email"]')
      .clear({ force: true })
      .type('emilycarter@yourmail.com', { force: true });

    // Emergency Phone
    cy.get(':nth-child(4) > :nth-child(5) > .form-group > .form-control')
      .clear({ force: true })
      .type('3191110000', { force: true });
    // Click Add Button
    cy.get('.form-body > .d-flex > .btn')
      .click();

    cy.get('.swal2-confirm')
      .click();

    cy.get('.d-inline-flex')
      .click();

    cy.get('.swal2-confirm')
      .click();


    // Success message in Cypress runner log
    cy.log('Test Case Passed: Patient Registration form filled successfully');
  });  

  it('should show validation errors when required fields are missing', () => {

    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Patient menu
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Add New Patient
    cy.contains('span.vsm-title', 'Add New Patient', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    // Don’t fill anything → click Next
    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();

    // Assert validation messages
    cy.contains('Name is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
  });

  it('should prevent adding a patient with duplicate email', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const duplicateEmail = "designartist1418@gmail.com"; // existing email

    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Patient menu
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Add New Patient
    cy.contains('span.vsm-title', 'Add New Patient', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(duplicateEmail);


    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();

    // Assert duplicate email error
    cy.contains('This user is already associated.').should('be.visible');
  });

  it('should show error for invalid email format', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Patient menu
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Add New Patient
    cy.contains('span.vsm-title', 'Add New Patient', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();


    cy.get('input[formcontrolname="first_name"]').type(firstName);
    cy.get('input[formcontrolname="last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type('invalidEmail');

    cy.contains('.btn-pill.btn', 'Next', { timeout: 10000 }).click();

    // Assert invalid email error
    cy.contains('Enter a valid email').should('be.visible');
  });
});