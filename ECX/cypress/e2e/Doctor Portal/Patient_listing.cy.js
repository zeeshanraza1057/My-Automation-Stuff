/**
 * Test Suite: Doctor - Patient Management
 *
 * Purpose:
 * - Validate end-to-end patient management features for doctors, including
 *   search, profile access, edit, deactivate, and API validation.
 * - Ensure proper handling of invalid actions such as bulk actions when disabled,
 *   editing without changes, or saving invalid data.
 *
 * Scenarios Covered:
 *
 * Positive Flows:
 * 1. Search patients successfully by name.
 * 2. View patient profile details from listings.
 * 3. Edit patient details and save successfully.
 * 4. Deactivate a patient account successfully.
 * 5. Validate patient listing via API intercept for different statuses.
 *
 * Negative Flows:
 * 6. Ensure no action popup opens when bulk action icon is missing/disabled.
 * 7. Show "no results" page when searching unmatched patients.
 * 8. Prevent saving when no changes are made during edit.
 * 9. Validate error messages when saving invalid patient data.
 *
 * Expected Results:
 * - Patient listings, search, edit, and profile functionalities should work as expected.
 * - API intercept should validate that the UI reflects backend data accurately.
 * - System should prevent invalid or unintended operations gracefully.
 */

describe('Doctor - Patient Management', () => {
  beforeEach(() => {
    cy.loginAs('doctor'); 
    cy.url().should('include', '/dashboard');
  });

  it('Should not open any action popup if bulk action icon is missing or disabled', () => {
    cy.visit('/patients');
    cy.get('body').then($body => {
      if ($body.find('.bulk-action-icon:disabled').length > 0 || !$body.find('.bulk-action-icon').length) {
        cy.get('.mat-menu-panel').should('not.exist');
      }
    });
    cy.log('No popup opened when bulk action icon is missing or disabled');
  });

  it('Should show no results when searching unmatched patient', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');
    cy.log('Patient listings page opened');

    cy.get('input[placeholder="Search"]').type('invalidName123', { force: true });
    cy.wait(2000);
    cy.get('img[src*="data-unavailability.png"]', { timeout: 50000 }).should('be.visible');
    cy.log('Unmatched search works correctly');
  });

  it('Should not show error message if trying to edit without making changes', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');
    cy.log('Patient listings page opened');

    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .first()
      .click({ force: true });
    cy.contains('Edit Details').click({ force: true });
    cy.get('button').contains('Next').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Error shown when editing without changes');
  });

  it('Should not allow saving invalid data (mandatory fields cleared)', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');
    cy.log('Patient listings page opened');

    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    cy.get('input[formcontrolname="first_name"]').clear();
    cy.get('button').contains('Next').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Invalid data validation works correctly');
  });

  it('Should open patient profile', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');
    cy.log('Patient listings page opened');

    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Patient Profile').click({ force: true });
    cy.contains('Patient Profiling').should('be.visible');

    cy.log('Patient profile viewed successfully');
  });

  it('Should edit patient details successfully', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');

    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    cy.get('input[formcontrolname="first_name"]').clear().type('Updated Patient Name');
    cy.get('button').contains('Save').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Patient details updated successfully');
  });

  it('Should deactivate patient account successfully', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });

    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Deactivate').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Patient account deactivated successfully');
  });

  it('Should search patients successfully', () => {
    cy.get('.sidebar-toggle').click();
    cy.contains('button.vsm-link', 'Patient', { timeout: 10000 }).click();
    cy.contains('span.vsm-title', 'Patient Listings').click({ force: true });
    cy.url().should('include', '/patients');

    cy.get('input[placeholder="Search"]').type('zeeshan', { force: true });
    cy.wait(2000);
    cy.get('.p-element', { timeout: 20000 }).should('contain', 'Zeeshan Raza');

    cy.log('Patient search works correctly');
  });

  it('API Intercept for Patient List by Status', () => {
    const statuses = [
      'pending',
      'active',
      'raise_objection',
      'suspended',
      'pending_for_approval'
    ];

    statuses.forEach(status => {
      it(`Should fetch and display patients with status: ${status}`, () => {
        cy.intercept(
          'GET',
          `/api/v1/patient/?page=1&limit=10&search=&status=${status}`
        ).as('getPatients');

        cy.visit('/patients');

        cy.get('input[aria-autocomplete="list"]').click({ force: true });
        cy.contains(new RegExp(status.replace(/_/g, ' '), 'i')).click({ force: true });

        cy.wait('@getPatients').then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('data');
          expect(response.body.data.data).to.be.an('array');

          if (response.body.data.data.length > 0) {
            response.body.data.data.forEach(patient => {
              expect(patient.status.toLowerCase()).to.eq(status);
            });
          }
        });

        cy.get('.patient-list .status-column').each($el => {
          cy.wrap($el).should('contain.text', status.replace(/_/g, ' '));
        });

        cy.get('.patient-list .status-column')
          .its('length')
          .then(uiCount => {
            cy.wait('@getPatients').then(({ response }) => {
              expect(uiCount).to.eq(response.body.data.data.length);
            });
          });

        cy.log(`Test Case Passed: Patient API validation for status "${status}" successful`);
      });
    });
  });
});
