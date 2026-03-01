/**
 * Test Suite: EyeCareX Portal - Login Tests
 *
 * Purpose:
 * - Validate login functionality with different input scenarios.
 *
 * Scenarios Covered:
 * 1. Invalid Username → Ensure system shows error popup.
 * 2. Invalid Password → Ensure system shows error popup.
 * 3. Empty Username → Ensure "Email is required" validation is displayed.
 * 4. Empty Password → Ensure login button is disabled.
 * 5. Valid Credentials → Ensure successful login redirects to dashboard.
 *
 * Expected Results:
 * - Users cannot log in with invalid credentials.
 * - Proper validation messages are displayed for empty fields.
 * - Successful login should navigate to dashboard when correct credentials are provided.
 */

describe('EyeCareX Portal Login Tests', () => {
  const baseUrl = Cypress.env('BASE_URL');
  const validUsername = Cypress.env('USER_NAME');
  const validPassword = Cypress.env('USER_PASSWORD');

  // Custom invalid password for testing
  const invalidPassword = Cypress.env('INVALID_PASSWORD') || 'Shann@2025';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Should show error on invalid username', () => {
    cy.get('input[formcontrolname="email_or_username"]').clear().type('invalid_user');
    cy.get('input[formcontrolname="password"]').clear().type(validPassword);
    cy.get('button.btn.login-btn').should('not.be.disabled').click();

    cy.get('[role="dialog"]').should('be.visible').and('contain.text', 'Error');

    cy.log('Test Case Passed: Invalid username shows error popup');
  });

  it('Should show error on invalid password', () => {
    cy.get('input[formcontrolname="email_or_username"]').clear().type(validUsername);
    cy.get('input[formcontrolname="password"]').clear().type(invalidPassword);
    cy.get('button.btn.login-btn').should('not.be.disabled').click();

    cy.get('[role="dialog"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Error');

    cy.log('Test Case Passed: Invalid password shows error popup');
  });

  it('Should show validation error when username is empty', () => {
    cy.get('input[formcontrolname="email_or_username"]').clear();
    cy.get('input[formcontrolname="password"]').clear().type(validPassword);

    cy.get('button.btn.login-btn').should('be.disabled');
    cy.contains('Email is required').should('be.visible');

    cy.log('Test Case Passed: Empty username shows validation error');
  });

  it('Should show validation error when password is empty', () => {
    cy.get('input[formcontrolname="email_or_username"]').clear().type(validUsername);
    cy.get('input[formcontrolname="password"]').clear();

    cy.get('button.btn.login-btn').should('be.disabled');

    cy.log('Test Case Passed: Empty password disables login button');
  });

  it('Should login successfully with valid username and password', () => {
    cy.get('input[formcontrolname="email_or_username"]').clear().type(validUsername);
    cy.get('input[formcontrolname="password"]').clear().type(validPassword);
    cy.get('button.btn.login-btn').should('not.be.disabled').click();
    cy.url().should('include', '/dashboard');

    cy.log('Test Case Passed: Valid login redirects to dashboard');
  });
});
