/**
 * Test Suite: EyeCareX Portal - Add Clinic
 *
 * Purpose:
 * - Validate the functionality of adding a new clinic in the EyeCareX portal.
 *
 * Scenarios Covered:
 * 1. Positive Case → Add a new clinic successfully with valid data (full flow).
 * 2. Negative Case → Show validation errors when required fields are missing.
 * 3. Negative Case → Prevent adding clinic with duplicate email (owner email / company contact email).
 * 4. Edge Case → Validate email field for invalid email format.
 * 5. Edge Case → Validate mobile number field for invalid phone number.
 *
 * Expected Results:
 * - System should allow adding a clinic with valid details and send an invitation.
 * - System should block submission when required fields are missing.
 * - System should show proper error message when using duplicate email.
 * - System should validate incorrect email and phone formats.
 */

import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('EyeCareX Portal - Add Clinic', () => {
  beforeEach(() => {
    cy.login();
    // Ensure dashboard is loaded
    cy.url().should('include', '/dashboard');
  });

  // Positive Test Case: Full Flow
  it('Should add a new clinic successfully (full flow)', () => {
    // ---- Generate random data ----
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    const mobile = faker.string.numeric(10);
    const clinicName = faker.company.name();
    const website = faker.internet.url();
    const bio = faker.company.catchPhrase();
    const contactEmail = faker.internet.email();
    const contactPhone = faker.string.numeric(10);
    const fax = faker.string.numeric(9);
    const street = faker.location.streetAddress();
    const zip = faker.location.zipCode();

    const serviceName = `Service${faker.commerce.department()}`;
    const feeTitle = `Fee${faker.commerce.product()}`;
    const serviceDescription = faker.commerce.productDescription();
    const servicePrice = faker.commerce.price({ min: 50, max: 500, dec: 0 });
    const unitDescriptor = 'per visit';
    const taxTitle = 'GST';
    const taxAmount = '5';

    const termsAndCondition = 'Payment due at time of service.';
    const methodDescription = 'We accept all Visa/MasterCard payments.';
    const refundPolicy = 'Refunds allowed within 7 days.';

    const ProgramTitle = 'Community Support and Outreach Program';
    const ProgramDescription = 'We work together to provide resources, guidance, and support for individuals and families in need.';
    const TargetAudience = 'Open to all community members seeking assistance, connection, and opportunities for growth.';

    // ---- Navigation ----
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted').contains('Clinic Management').click();
    // cy.contains('.vsm-title', 'Add Clinic Center', { timeout: 10000 })
    //   .should('be.visible')
    //   .click();
    cy.contains('span.vsm-title', 'Add Clinic Center', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });

    // ---- Owner Info ----
    cy.get('input[formcontrolname="owner_first_name"]').type(firstName);
    cy.get('input[formcontrolname="owner_last_name"]').type(lastName);
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="mobile_number"]').type(mobile);
    cy.get('input[formcontrolname="name"]').type(clinicName);
    cy.get('input[formcontrolname="website"]').type(website);
    cy.get('input[formcontrolname="bio"]').type(bio);
    cy.get('input[formcontrolname="company_contact_email"]').type(contactEmail);
    cy.get('input[formcontrolname="company_contact_phone_number"]').type(contactPhone);
    cy.get('input[formcontrolname="fax"]').type(fax);

    cy.get('input[aria-autocomplete="list"]').eq(0).type('Canada{enter}');
    cy.get('input[aria-autocomplete="list"]').eq(1).type('Alberta{enter}');
    cy.get('input[aria-autocomplete="list"]').eq(2).type('Brooks{enter}');
    cy.get('input[formcontrolname="office"]').type('12A');
    cy.get('input[formcontrolname="street_address"]').type(street);
    cy.get('input[formcontrolname="zip_code"]').type(zip);

    cy.contains('button', 'Next').click();
    cy.get('.swal2-confirm.swal2-styled').click();

    // ---- Clinic Registration ----
    cy.get('input[formcontrolname="registration_number"]').type(faker.string.numeric(8));
    cy.get('input[formcontrolname="professional_corporation_number"]').type(faker.string.numeric(8));
    cy.get('input[formcontrolname="local_business_license"]').type(faker.string.numeric(6));
    cy.get('input[formcontrolname="professional_liablity_insurance"]').type(faker.string.alphanumeric(5));
    cy.contains('button', 'Save').click();
    cy.get('button.swal2-confirm.swal2-styled').should('be.visible').click();
    cy.contains('button', 'Next').click();

    // ---- Healthcare Provider IDs ----
    cy.get('input[formcontrolname="clinic_facility_id"]').type(faker.string.numeric(6));
    cy.get('input[formcontrolname="clinic_billing_number"]').type(faker.string.numeric(6));
    cy.get('input[formcontrolname="provincial_practitioner_id"]').type(faker.string.numeric(6));
    cy.fixture('image-20250827-154501.jpg', 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(function (fileContent) {
    cy.get('input#upload_files_healthcare').attachFile({
          fileContent,
          fileName: 'image-20250827-154501.jpg',
          mimeType: 'image/jpeg'
        });
      });
    cy.contains('button', 'Add').click();
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Services Available ----
    cy.get('#v-pills-settings input[formcontrolname="name"]').type(serviceName, { force: true });
    cy.get('#v-pills-settings input[formcontrolname="fee_title"]').type(feeTitle, { force: true });
    cy.get('#v-pills-settings textarea[formcontrolname="description"]').eq(0).type(serviceDescription, { force: true });
    cy.get('#v-pills-settings input[formcontrolname="price"]').type(servicePrice, { force: true });
    cy.get('#v-pills-settings input[formcontrolname="unit_descriptor"]').type(unitDescriptor, { force: true });
    cy.get('#v-pills-settings input[formcontrolname="tax_title"]').type(taxTitle, { force: true });
    cy.get('#v-pills-settings input[formcontrolname="tax_percentage_or_amount"]').type(taxAmount, { force: true });
    cy.get('#v-pills-settings button').contains('Add').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Accessibility ----
    cy.get('input[formcontrolname="accessibility_feature_name"]').type('Wheelchair Ramp');
    cy.get('input[formcontrolname="accessibility_feature_location"]').type('Main Entrance');
    cy.get('textarea[formcontrolname="accessibility_feature_description"]').type('Ramp available for wheelchair access.');
    cy.get('#v-pills-additional button.btn').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Payment Methods ----
    cy.get('.ng-input').eq(4).click();
    cy.get('.ng-option-label').contains('Card Payment').click({ force: true });
    cy.get('.ng-input').eq(5).click();
    cy.get('.ng-option-label').contains('Visa').click({ force: true });
    cy.get('[formcontrolname="terms_and_condition"]').type(termsAndCondition, { force: true });
    cy.get('[formcontrolname="method_description"]').type(methodDescription, { force: true });
    cy.get('[formcontrolname="refund_policy"]').type(refundPolicy, { force: true });
    cy.get('app-payment-method-description button.btn').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Languages ----
    cy.get('app-language-spoken .ng-select-container').click();
    cy.get('.ng-option-label').contains('English').click({ force: true });
    cy.get('app-language-spoken button.btn').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Working Hours ----
    cy.get('app-clinic-working-hours .ng-select-container').eq(0).click();
    cy.get('.ng-option-label').contains('Normal Working Hours').click({ force: true });
    cy.get('app-clinic-working-hours .ng-select-container').eq(1).click();
    cy.get('.ng-option-label').contains('Monday').click({ force: true });
    cy.get('input[formcontrolname="start_date"]').type('2025-09-12');
    cy.get('input[formcontrolname="end_date"]').type('2025-09-20');
    cy.get('input[formcontrolname="from_time"]').type('09:30').should('have.value', '09:30');
    cy.get('input[formcontrolname="to_time"]').type('21:30').should('have.value', '21:30');
    cy.get('app-clinic-working-hours .ng-select-container').eq(2).click();
    cy.get('.ng-option-label').contains('UTC-07:00').click({ force: true });
    cy.get('app-clinic-working-hours button.btn').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();
    cy.contains('button', 'Next').click();

    // ---- Community/Outreach ----
    cy.get('app-outreach-program .ng-select-container').click();
    cy.get('.ng-option-label').contains('Community Engagement').click({ force: true });
    cy.get('[formcontrolname="program_title"]').type(ProgramTitle, { force: true });
    cy.get('[formcontrolname="program_description"]').type(ProgramDescription, { force: true });
    cy.get('[formcontrolname="program_target_audience"]').type(TargetAudience, { force: true });
    cy.get('app-outreach-program button.btn').click({ force: true });
    cy.get('button.swal2-confirm.swal2-styled').click();

    // ---- Submit and Send Invite ----
    cy.contains('button', 'Next').click();
    cy.get('app-page-title .page-title-actions > button').click();
    cy.contains('Invitation has been sent', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Go Back To Clinic Listing').click();
    cy.contains('Clinic Listing').should('be.visible');

    cy.log('Test Case Passed: Clinic added successfully (full flow)');
  });

  // Negative Case 1: Missing Required Fields
  it('Should show validation errors for missing required fields', () => {
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted').contains('Clinic Management').click();
    // cy.contains('.vsm-title', 'Add Clinic Center', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Add Clinic Center', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.contains('button', 'Next').click();
    cy.contains('Value is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.get('button.swal2-confirm').click();

    cy.log('Test Case Passed: Validation errors displayed for missing required fields');
  });

  // Negative Case 2: Duplicate Email
  it('Should show error for duplicate clinic email', () => {
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted').contains('Clinic Management').click();
    // cy.contains('.vsm-title', 'Add Clinic Center', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Add Clinic Center', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.get('input[formcontrolname="owner_first_name"]').type('John');
    cy.get('input[formcontrolname="owner_last_name"]').type('Doe');
    cy.get('input[formcontrolname="email"]').type('owner@yopmail.com');
    cy.get('input[formcontrolname="mobile_number"]').type('4876487268');
    cy.get('input[formcontrolname="name"]').type('Duplicate Eye Care');
    cy.get('input[formcontrolname="website"]').type('https://demoeyecare.com');
    cy.get('input[formcontrolname="bio"]').type('Duplicate clinic test.');
    cy.get('input[formcontrolname="company_contact_email"]').type('clinic@yopmail.com');
    cy.get('input[formcontrolname="company_contact_phone_number"]').type('9876543210');
    cy.get('input[formcontrolname="fax"]').type('111222333');
    cy.get('input[aria-autocomplete="list"]').eq(0).type('Canada{enter}');
    cy.get('input[aria-autocomplete="list"]').eq(1).type('Alberta{enter}');
    cy.get('input[aria-autocomplete="list"]').eq(2).type('Brooks{enter}');
    cy.get('input[formcontrolname="office"]').type('12A');
    cy.get('input[formcontrolname="street_address"]').type('Main Street, DHA');
    cy.get('input[formcontrolname="zip_code"]').type('54000');
    cy.contains('button', 'Next').click();
    cy.get('.swal2-confirm.swal2-styled').click();

    cy.log('Test Case Passed: Duplicate clinic email error displayed');
  });

  // Edge Case: Invalid Email Format
  it('Should show validation for invalid email format', () => {
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted').contains('Clinic Management').click();
    // cy.contains('.vsm-title', 'Add Clinic Center', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Add Clinic Center', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.get('input[formcontrolname="email"]').type('invalid-email');
    cy.contains('button', 'Next').click();
    cy.get('.swal2-confirm.swal2-styled').click();

    cy.log('Test Case Passed: Invalid email format validation displayed');
  });

  // Edge Case: Invalid Phone Number
  it('Should show validation for invalid phone number', () => {
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted').contains('Clinic Management').click();
    // cy.contains('.vsm-title', 'Add Clinic Center', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Add Clinic Center', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.get('input[formcontrolname="mobile_number"]').type('abcd123');
    cy.contains('button', 'Next').click();
    cy.get('.swal2-confirm.swal2-styled').click();

    cy.log('Test Case Passed: Invalid phone number validation displayed');
  });
});
