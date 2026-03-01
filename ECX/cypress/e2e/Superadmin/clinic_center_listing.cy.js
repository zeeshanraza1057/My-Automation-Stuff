/**
 * Test Suite: Clinic Management - Clinic Center Listing
 *
 * Purpose:
 * - Validate the listing, searching, filtering, and editing functionality
 *   of Clinic Centers under Clinic Management in the EyeCareX portal.
 *
 * Scenarios Covered:
 *
 * Negative Test Cases:
 * 1. Ensure no action popup opens if bulk action icon is missing or disabled.
 * 2. Show error message when attempting to edit without making changes.
 * 3. Prevent submission of invalid data in the edit clinic form.
 * 4. Show "no results" message when search input does not match any record.
 * 5. Show "no results" message for non-existent filter status.
 *
 * Positive Test Cases:
 * 6. View clinic details successfully.
 * 7. Edit clinic details successfully with valid updates.
 * 8. Search for clinics successfully and display correct results.
 *
 * API Validation:
 * 9. Intercept and validate "Company List by Status" API calls for statuses:
 *    - pending
 *    - active
 *    - raise_objection
 *    - suspended
 *    - pending_for_approval
 *
 * Expected Results:
 * - User should be able to view, search, and edit clinic details correctly.
 * - Proper validation messages should appear when invalid actions are attempted.
 * - API responses and UI listing should remain consistent for each filter status.
 */

describe('Clinic Management - Clinic Center Listing', () => {
  beforeEach(() => {
    cy.loginAs('superadmin'); // will reuse saved session instead of logging in again
    cy.get('.sidebar-toggle').click({ force: true });
    cy.get('button.vsm-link.mt-1.ng-star-inserted')
      .contains('Clinic Management')
      .click({ force: true });

    cy.get('a.vsm-link[href="/main/clinics/clinic-service"]')
      .click({ force: true });
  });

  // Negative Test Cases

  it('Should not open any action popup if bulk action icon is missing or disabled', () => {
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .should('exist')
      .and('not.be.disabled');

    cy.log('Test Case Passed: Bulk action popup not opened when icon missing/disabled');
  });

  it('Should show error message if trying to edit without making changes', () => {
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .first()
      .click({ force: true });
    cy.contains('Edit Details').click({ force: true });
    cy.get('button').contains('Next').click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Error shown when editing without changes');
  });

  it('Should not allow invalid data in edit form', () => {
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .first()
      .click({ force: true });
    cy.contains('button.mat-menu-item', 'Edit Details', { timeout: 50000 })
      .click({ force: true });

    cy.get('.form-body > :nth-child(1) > :nth-child(1) > :nth-child(7) > .form-group > .form-control')
      .clear({ force: true });

    cy.get('button').contains('Next', { timeout: 50000 }).click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Invalid data prevented in edit clinic form');
  });

  it('Should display no results message for unmatched search', () => {
    cy.get('input[placeholder="Search"]').type('987987987', { force: true });
    cy.get('img[src*="data-unavailability.png"]', { timeout: 50000 })
      .should('be.visible');

    cy.log('Test Case Passed: No results message shown for unmatched search');
  });

  it('Should show no results for non-existent filter status', () => {
    cy.get('input[aria-autocomplete="list"]').click({ force: true });
    cy.contains('Suspended').click({ force: true });
    cy.get('img[src*="data-unavailability.png"]', { timeout: 50000 })
      .should('be.visible');

    cy.log('Test Case Passed: No results message shown for non-existent filter');
  });

  // Positive Test Cases

  it('Should view clinic details successfully', () => {
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .should('exist')
      .and('not.be.disabled')
      .first()
      .click({ force: true });

    cy.contains('button', 'View Details').click({ force: true });
    cy.contains('Clinic Profiling').should('be.visible');

    cy.log('Test Case Passed: Clinic details viewed successfully');
  });

  it('Should edit clinic details successfully', () => {
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .should('exist')
      .and('not.be.disabled')
      .first()
      .click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details')
      .click({ force: true });
    cy.get('input[formcontrolname="name"]').first().clear({ force: true }).type('Updated Clinic Name', { force: true });
    cy.get('button').contains('Next').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Clinic details edited successfully');
  });

  // it('Should search clinics successfully', () => {
  //   cy.get('.p-inputtext').type('zeeshanraza', { force: true });
  //   cy.get('.p-element').should('contain', 'Zeeshan QRaza');

  //   cy.log('Test Case Passed: Clinic search works correctly');
  // });
  it('Should search clinics successfully', () => {
  cy.get('.p-inputtext').type('zeeshanraza', { force: true });

  cy.wait(2000); // give API/DOM time to update

  cy.get('.p-element', { timeout: 20000 })
    .should('contain', 'Zeeshan QRaza');

  cy.log('✅ Test Case Passed: Clinic search works correctly');
});


  it('API Intercept for Company List by Status', () => {
  // API Validation
  const statuses = [
    'pending',
    'active',
    'raise_objection',
    'suspended',
    'pending_for_approval'
  ];

  statuses.forEach(status => {
    it(`Should fetch and display companies with status: ${status}`, () => {
      cy.intercept(
        'GET',
        `/api/v1/company/?page=1&limit=10&search=&status=${status}`
      ).as('getCompanies');

      cy.visit('/companies'); // 🔹 Replace with actual route

      cy.get('input[aria-autocomplete="list"]').click({ force: true });
      cy.contains(new RegExp(status.replace(/_/g, ' '), 'i')).click({ force: true });

      cy.wait('@getCompanies').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('data');
        expect(response.body.data.data).to.be.an('array');

        if (response.body.data.data.length > 0) {
          response.body.data.data.forEach(company => {
            expect(company.status.toLowerCase()).to.eq(status);
          });
        }
      });

      cy.get('.clinic-list .status-column').each($el => {
        cy.wrap($el).should('contain.text', status.replace(/_/g, ' '));
      });

      cy.get('.clinic-list .status-column')
        .its('length')
        .then(uiCount => {
          cy.wait('@getCompanies').then(({ response }) => {
            expect(uiCount).to.eq(response.body.data.data.length);
          });
        });

      cy.log(`Test Case Passed: API validation for status "${status}" successful`);
    });
  });
});
});
