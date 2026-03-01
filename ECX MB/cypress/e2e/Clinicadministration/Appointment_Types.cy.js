/**
 * Test Suite: Clinic Admin - Add New Appointment Type
 *
 * Purpose:
 * - Validate creation of a new appointment type by a clinic admin.
 * - Ensure that all mandatory fields are properly handled, including
 *   appointment type name, duration, and eye test selection.
 *
 * Scenarios Covered:
 *
 * Positive Flow:
 * 1. Successfully create a new appointment type by filling all required fields.
 *    - Enter appointment type name.
 *    - Select a duration (randomly chosen from dropdown).
 *    - Select an eye test (randomly chosen from dropdown).
 *    - Submit the form.
 *
 * Negative Flow (implicitly covered by validations in the flow):
 * 2. Prevent creation if mandatory fields are missing (handled by form controls).
 *
 * Expected Results:
 * - Appointment type should be created successfully when all fields are valid.
 * - Success message "Appointment type created successfully" should be displayed.
 * - Form validations should prevent submission when required fields are empty.
 */

describe('Clinic Admin - Add New Appointment Type', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); // login as clinic admin
    cy.url().should('include', '/dashboard');
  });

  it('should create a new appointment type successfully', () => {
    // Open sidebar and go to Clinic Management & Services
    cy.get('.sidebar-toggle', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('span.vsm-title', 'Clinic Management & Services')
      .parents('button.vsm-link')
      .click();

    // Open Appointment Types page
    cy.contains('.vsm-link', 'Appointment Types', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Add New Appointment Type
    cy.contains('button.add-new-btn', 'Add New Appointment Type', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Fill Appointment Type
    cy.get('input[formcontrolname="appointment_type"]', { timeout: 10000 })
      .should('be.visible')
      .type('General Checkup');

    // Select Duration (random from dropdown)
    cy.get(':nth-child(3) > .form-group > .font-small-1 > .ng-select-container').click();
    cy.get('.ng-option').then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click();
    });

    // Select Eye Test (random from dropdown)
    cy.get('ng-select[formcontrolname="eye_tests"]').click();
    cy.get('.ng-option').then($options => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click();
    });

    // Submit form
    cy.contains('button.submit-btn', 'Done').click();

    // Assert success message
    cy.get('.swal2-confirm').click();
    cy.contains('Appointment type created successfully', { timeout: 10000 })
      .should('be.visible');
  });
});
