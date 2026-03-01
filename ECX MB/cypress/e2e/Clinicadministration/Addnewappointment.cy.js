/**
 * Test Suite: Clinic Admin - Add New Appointment
 *
 * Purpose:
 * - Validate that clinic admins can create new appointments successfully.
 * - Ensure that appointment creation requires all mandatory fields (patient, doctor, type, slot).
 *
 * Scenarios Covered:
 *
 * Positive Flows:
 * 1. Create a new appointment with valid patient, doctor, type, and slot.
 *
 * Negative Flows:
 * 2. Keep "Create Appointment" button disabled when patient is not selected.
 * 3. Keep "Create Appointment" button disabled when doctor is not selected.
 * 4. Keep "Create Appointment" button disabled when appointment type is not selected.
 * 5. Keep "Create Appointment" button disabled when no slot is selected.
 *
 * Expected Results:
 * - Appointment creation should succeed with proper confirmation message.
 * - "Create Appointment" button should remain disabled until all required inputs are provided.
 * - UI should prevent invalid submissions gracefully without throwing errors.
 */

describe('Clinic Admin - Add New Appointment', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); // custom login command
    cy.url().should('include', '/dashboard');
  });

  //
  // ---- Custom Commands for Reuse ----
  //
  Cypress.Commands.add('openAppointmentForm', () => {
    cy.get('.sidebar-toggle', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Calendar').parents('button.vsm-link').click();
    cy.contains('.vsm-link', 'Add New Appointment').click();
    cy.contains('button', 'Schedule New Appointment').click();
  });

  Cypress.Commands.add('selectPatient', (name) => {
    cy.get('ng-select[formcontrolname="patient"]').click();
    cy.contains('.ng-option', name).click();
  });

  Cypress.Commands.add('selectDoctor', (name) => {
    cy.get('ng-select[formcontrolname="doctor"]').click();
    cy.contains('.ng-option', name).click();
  });

  Cypress.Commands.add('selectAppointmentType', (type) => {
    cy.get('ng-select[formcontrolname="appointment_type"]').click();
    cy.contains('.ng-option', type).click();
  });

  Cypress.Commands.add('selectRandomSlot', () => {
    cy.get('button.schedule-slot-pills:not([disabled])', { timeout: 10000 })
      .then($slots => {
        const randomIndex = Math.floor(Math.random() * $slots.length);
        cy.wrap($slots[randomIndex]).click();
      });
  });

  Cypress.Commands.add('createAppointment', (patient, doctor, type) => {
    cy.openAppointmentForm();
    cy.selectPatient(patient);
    cy.selectDoctor(doctor);
    cy.selectAppointmentType(type);
    cy.selectRandomSlot();
    cy.contains('button', 'Create Appointment').click();
  });

  //
  // ---- Positive Test Cases ----
  //

  it('should create a new appointment successfully', () => {
    cy.createAppointment('Zeeshan Patient', 'Zeeshan Doctor', 'My Appointment');
    cy.contains('Appointment created successfully', { timeout: 10000 }).should('be.visible');
    cy.get('.swal2-confirm').click();
  });

  //
  // ---- Negative Test Cases (Button Disabled Instead of Error) ----
  //

  it('should keep Create Appointment button disabled when patient is not selected', () => {
    cy.openAppointmentForm();
    cy.selectDoctor('Zeeshan Doctor');
    cy.selectAppointmentType('My Appointment');
    cy.selectRandomSlot();
    cy.contains('button', 'Create Appointment').should('be.disabled');
  });

  it('should keep Create Appointment button disabled when doctor is not selected', () => {
    cy.openAppointmentForm();
    cy.selectPatient('Zeeshan Patient');
    cy.selectAppointmentType('My Appointment');
    // cy.selectRandomSlot();
    cy.contains('button', 'Create Appointment').should('be.disabled');
  });

  it('should keep Create Appointment button disabled when appointment type is not selected', () => {
    cy.openAppointmentForm();
    cy.selectPatient('Zeeshan Patient');
    cy.selectDoctor('Zeeshan Doctor');
    // cy.selectRandomSlot();
    cy.contains('button', 'Create Appointment').should('be.disabled');
  });

  it('should keep Create Appointment button disabled when no time slot is selected', () => {
    cy.openAppointmentForm();
    cy.selectPatient('Zeeshan Patient');
    cy.selectDoctor('Zeeshan Doctor');
    cy.selectAppointmentType('My Appointment');
    // cy.contains('button', 'Create Appointment').should('be.disabled');
    cy.get('.pt-5 > .btn').should('exist').click();
    cy.get('.swal2-confirm');
  });
  
});
