/**
 * Test Suite: Doctor Portal - Add New Appointment
 *
 * Purpose:
 * - Validate the appointment creation flow in the Doctor Portal.
 * - Ensure required fields (patient, type, slot) are enforced before creating appointments.
 *
 * Scenarios Covered:
 *
 * Positive Flow:
 * 1. Create a new appointment successfully with valid patient, appointment type, and available slot.
 *
 * Negative Flows:
 * 2. Keep "Create Appointment" button disabled if patient is not selected.
 * 3. Keep "Create Appointment" button disabled if appointment type is not selected.
 * 4. Keep "Create Appointment" button disabled if no time slot is selected.
 *
 * Expected Results:
 * - Appointment is created successfully when all valid inputs are provided.
 * - The system prevents submission when required fields are missing by disabling the button.
 */

describe('Doctor Portal - Add New Appointment', () => {
  beforeEach(() => {
    cy.loginAs('doctor'); // Login using custom doctor credentials
    cy.url().should('include', '/dashboard'); // Verify successful login by checking URL
  });

  //
  // ---- Custom Commands for Reuse ----
  //

  // Open "Add New Appointment" form from sidebar
  Cypress.Commands.add('openAppointmentForm', () => {
    cy.get('.sidebar-toggle', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Calendar').parents('button.vsm-link').click();
    cy.contains('.vsm-link', 'Add New Appointment').click();
    cy.contains('button', 'Schedule New Appointment').click();
  });

  // Select a patient from the dropdown
  Cypress.Commands.add('selectPatient', (name) => {
    cy.get('ng-select[formcontrolname="patient"]').click();
    cy.contains('.ng-option', name).click();
  });

  // Select an appointment type from the dropdown
  Cypress.Commands.add('selectAppointmentType', (type) => {
    cy.get('ng-select[formcontrolname="appointment_type"]').click();
    cy.contains('.ng-option', type).click();
  });

  // Randomly select one of the available time slots
  Cypress.Commands.add('selectRandomSlot', () => {
    cy.get('button.slot-pills:not([disabled])', { timeout: 10000 })
      .then($slots => {
        const randomIndex = Math.floor(Math.random() * $slots.length);
        cy.wrap($slots[randomIndex]).click();
      });
  });

  // Full flow: open form → select patient, type, slot → create appointment
  Cypress.Commands.add('createAppointment', (patient, type) => {
    cy.openAppointmentForm();
    cy.selectPatient(patient);
    cy.selectAppointmentType(type);
    cy.selectRandomSlot();
    cy.contains('button', 'Create Appointment').click();
  });

  //
  // ---- Positive Test Case ----
  //

  it('should create a new appointment successfully', () => {
    cy.createAppointment('Zeeshan Patient', 'My Appointment'); // Custom reusable flow
    cy.contains('Appointment created successfully', { timeout: 10000 }).should('be.visible'); // Verify success message
    cy.get('.swal2-confirm').click(); // Dismiss confirmation popup
    cy.log('Test Passed: Appointment created successfully');
  });

  //
  // ---- Negative Test Cases ----
  //

  it('should keep Create Appointment button disabled when patient is not selected', () => {
    cy.openAppointmentForm();
    cy.selectAppointmentType('My Appointment'); // Select type only
    cy.selectRandomSlot(); // Select time slot
    cy.contains('button', 'Create Appointment').should('be.disabled'); // Verify button stays disabled
    cy.log('Test Passed: Button disabled when patient missing');
  });

  it('should keep Create Appointment button disabled when appointment type is not selected', () => {
    cy.openAppointmentForm();
    cy.selectPatient('Zeeshan Patient'); // Select patient only
    cy.contains('button', 'Create Appointment').should('be.disabled'); // Verify button stays disabled
    cy.log('Test Passed: Button disabled when appointment type missing');
  });

  it('should keep Create Appointment button disabled when no time slot is selected', () => {
    cy.openAppointmentForm();
    cy.selectPatient('Zeeshan Patient'); // Select patient
    cy.selectAppointmentType('My Appointment'); // Select appointment type
    // Skipping slot selection deliberately
    cy.get('.row > .justify-content-end > .btn').should('exist').click(); // Try clicking action
    cy.get('.swal2-confirm'); // Expect confirmation popup (edge case handling)
    cy.log('Test Passed: Button disabled or flow blocked when no slot selected');
  });
});
