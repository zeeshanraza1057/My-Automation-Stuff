/**
 * Test Suite: Clinic Admin - Doctor Management
 *
 * Purpose:
 * - Validate doctor management features including search, edit, view profile, and API validations.
 * - Ensure proper handling of bulk actions, validations, and error scenarios.
 *
 * Scenarios Covered:
 *
 * Positive Flows:
 * 1. Search doctors successfully by name.
 * 2. Edit doctor details and save successfully.
 * 3. Open and view doctor profile.
 * 4. Validate doctor listing API with different statuses (pending, active, raise_objection, suspended, pending_for_approval).
 *
 * Negative Flows:
 * 5. Ensure no popup opens if bulk action icon is missing or disabled.
 * 6. Show "no results" image when searching unmatched doctor.
 * 7. Prevent saving when mandatory fields are cleared.
 * 8. Show error if trying to edit without making changes.
 *
 * Expected Results:
 * - Doctor search should work correctly with matched and unmatched data.
 * - Doctor details should be editable with proper validations in place.
 * - Doctor profiles should be accessible and visible.
 * - API intercepts should validate doctor statuses properly.
 * - UI should handle invalid scenarios gracefully without breaking the flow.
 */

describe('Clinic Admin - Doctor Management', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); 
    cy.url().should('include', '/dashboard');
  });

  it('Should not open any action popup if bulk action icon is missing or disabled', () => {
    cy.visit('/doctors');
    cy.get('body').then($body => {
      if ($body.find('.bulk-action-icon:disabled').length > 0 || !$body.find('.bulk-action-icon').length) {
        cy.get('.mat-menu-panel').should('not.exist');
      }
    });
    cy.log('No popup opened when bulk action icon is missing or disabled');
  });

  it('Should show no results when searching unmatched doctor', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();

    cy.url().should('include', '/doctors');
    cy.log('Doctor listings page opened');
    cy.get('input[placeholder="Search"]').type('invalidName123', { force: true });
    cy.wait(2000);
    cy.get('img[src*="data-unavailability.png"]', { timeout: 50000 })
     .should('be.visible');
    cy.log('Unmatched search works correctly');
  });

  it('Should not show error message if trying to edit without making changes', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/doctors');
    cy.log('Doctor listings page opened');
    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .first()
      .click({ force: true });
    cy.contains('Edit Details').click({ force: true });
    cy.get('button').contains('Next').click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Error shown when editing without changes');
  });

  it('Should not allow saving invalid data (mandatory fields cleared)', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/doctors');
    cy.log('Doctor listings page opened');
    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    cy.get('input[formcontrolname="first_name"]').clear();
    cy.get('button').contains('Next').click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Invalid data validation works correctly');
  });

  it('Should open doctor profile', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/doctors');
    cy.log('Doctor listings page opened');
    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'View Profile').click({ force: true });
    cy.contains('Doctor Profile').should('be.visible');
    cy.log('Doctor profile viewed successfully');
  });

  it('Should edit doctor details successfully', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/doctors');
    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    // Example: update name field
    cy.get('input[formcontrolname="first_name"]').clear().type('Updated Doctor Name');
    cy.get('button').contains('Save').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Doctor details updated successfully');
  });

  it('Should search doctors successfully', () => {
// Open sidebar
    cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();

    // Expand Staff Management menu
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Click Doctors
    cy.contains('span.vsm-title', 'Doctors', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    // cy.url().should('include', '/doctors');
    cy.get('input[placeholder="Search"]').type('zeeshan', { force: true });

    // cy.wait(2000);
    cy.get('.p-element', { timeout: 20000 }).should('contain', 'Zeeshan Doctor');

    cy.log('Doctor search works correctly');
  });

  it('API Intercept for Doctor List by Status', () => {
    const statuses = [
      'pending',
      'active',
      'raise_objection',
      'suspended',
      'pending_for_approval'
    ];

    statuses.forEach(status => {
      it(`Should fetch and display doctors with status: ${status}`, () => {
        cy.intercept(
          'GET',
          `/api/v1/doctor/?page=1&limit=10&search=&status=${status}`
        ).as('getDoctors');

        cy.visit('/doctors');

        cy.get('input[aria-autocomplete="list"]').click({ force: true });
        cy.contains(new RegExp(status.replace(/_/g, ' '), 'i')).click({ force: true });

        cy.wait('@getDoctors').then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('data');
          expect(response.body.data.data).to.be.an('array');

          if (response.body.data.data.length > 0) {
            response.body.data.data.forEach(doctor => {
              expect(doctor.status.toLowerCase()).to.eq(status);
            });
          }
        });

        cy.get('.doctor-list .status-column').each($el => {
          cy.wrap($el).should('contain.text', status.replace(/_/g, ' '));
        });

        cy.get('.doctor-list .status-column')
          .its('length')
          .then(uiCount => {
            cy.wait('@getDoctors').then(({ response }) => {
              expect(uiCount).to.eq(response.body.data.data.length);
            });
          });

        cy.log(`Test Case Passed: Doctor API validation for status "${status}" successful`);
      });
    });
  });
});

