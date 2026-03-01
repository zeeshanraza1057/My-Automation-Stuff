/**
 * Test Case: User Groups Management Functionality
 *
 * Description:
 * This test suite verifies the functionality of the User Groups section inside User Management.
 * It covers the following:
 *
 * 1. Navigation to User Groups from User Management.
 * 2. Verification of the Search field functionality.
 * 3. Verification of Bulk Action dropdown options, including:
 *    - Viewing user details
 *    - Editing user details
 *    - Deleting user records
 */
describe('User Groups Management Tests', () => {
  beforeEach(() => {
    cy.login(); // assuming saved session
    cy.get('.sidebar-toggle').click();
    cy.get('button.vsm-link.mt-1.ng-star-inserted')
      .contains('User Management')
      .click();
    cy.contains('.vsm-title', 'Users Groups', { timeout: 10000 })
      .should('be.visible')
      .click();
  });
  it('Should test Search field functionality', () => {
    cy.get('input[placeholder="Search"]').clear().type('Test User', { force: true });
  });

  it('Should view user details from Bulk Action menu', () => {

    // Open Bulk Action menu
    cy.get('mat-icon').contains('more_vert').click({ force: true });
    // View Details
    cy.contains('button.mat-menu-item span', 'View Details').click({ force: true });
    cy.get('.btn-close').click({ force: true });
  });
  it('Should edit user details from Bulk Action menu', () => {

    // Open Bulk Action → Edit Details
    cy.get('mat-icon').contains('more_vert').click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    // Clear previous name and enter new one
    cy.get('input[formcontrolname="full_name"]') // adjust selector to your input field
      .clear()
      .type('Updated Test User', { force: true });

    // Submit changes
    cy.get('button[type="submit"].btn.btn-primary.btn-shadow.submit-btn').click();
  });

    it('Should delete user from Bulk Action menu', () => {
    // Delete User
        cy.get('mat-icon').contains('more_vert').click({ force: true });
        cy.contains('button.mat-menu-item span', 'Delete Records').click({ force: true });
        cy.get('.swal2-confirm').click({ force: true }); // confirm delete
        cy.get('button.swal2-confirm').click();
  });
});
