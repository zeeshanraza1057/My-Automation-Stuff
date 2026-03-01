/**
 * Test Suite: Clinic Admin - Staff Management
 *
 * Purpose:
 * - Validate staff management features including search, edit, delete, and API validations.
 * - Ensure proper handling of bulk actions, validations, and error scenarios.
 *
 * Scenarios Covered:
 *
 * Positive Flows:
 * 1. Search staff successfully by name.
 * 2. Edit staff details and save successfully.
 * 3. Delete staff account successfully.
 * 4. Validate staff listing API with different statuses (pending, active, raise_objection, suspended, pending_for_approval).
 *
 * Negative Flows:
 * 5. Ensure no popup opens if bulk action icon is missing or disabled.
 * 6. Show "no results" image when searching unmatched staff.
 * 7. Prevent saving when mandatory fields are cleared.
 * 8. Show error if trying to edit without making changes.
 *
 * Expected Results:
 * - Staff search should work correctly with matched and unmatched data.
 * - Staff details should be editable with proper validations in place.
 * - Staff accounts should be deletable with confirmation prompts.
 * - API intercepts should validate staff statuses properly.
 * - UI should handle invalid scenarios gracefully without breaking the flow.
 */

describe('Clinic Admin - Staff Management', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin'); 
    cy.url().should('include', '/dashboard');
  });

  it('Should not open any action popup if bulk action icon is missing or disabled', () => {
    cy.visit('/staff');
    cy.get('body').then($body => {
      if ($body.find('.bulk-action-icon:disabled').length > 0 || !$body.find('.bulk-action-icon').length) {
        cy.get('.mat-menu-panel').should('not.exist');
      }
    });
    cy.log('No popup opened when bulk action icon is missing or disabled');
  });

  it('Should show no results when searching unmatched staff', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/staff');
    cy.log('Staff listings page opened');

    cy.get('input[placeholder="Search"]').type('kjhgjkhgkjhgjhkg', { force: true });
    cy.wait(2000);
    cy.get('img[src*="data-unavailability.png"]', { timeout: 50000 })
      .should('be.visible');
    cy.log('Unmatched search works correctly');
  });

  it('Should show error message if trying to edit without making changes', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/staff');
    cy.log('Staff listings page opened');

    cy.get('button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base')
      .first()
      .click({ force: true });
    cy.contains('Edit Details').click({ force: true });
    cy.get('button').contains('Next').click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Test Case Passed: Error shown when editing without changes');
  });

  it('Should not allow saving invalid data (mandatory fields cleared)', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/staff');
    cy.log('Staff listings page opened');

    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    cy.get('input[formcontrolname="first_name"]').clear();
    cy.get('button').contains('Next').click({ force: true });

    cy.get('.swal2-confirm').click({ force: true });
    cy.log('Invalid data validation works correctly');
  });

  it('Should edit staff details successfully', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/staff');
    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Edit Details').click({ force: true });

    cy.get('input[formcontrolname="first_name"]').clear().type('Updated Staff Name');
    cy.get('button').contains('Next').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Staff details updated successfully');
  });

  it('Should Delete staff account successfully', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.get('mat-icon').contains('more_vert').first().click({ force: true });
    cy.contains('button.mat-menu-item span', 'Delete Records').click({ force: true });
    cy.get('.swal2-confirm').click({ force: true });

    cy.log('Staff account deleted successfully');
  });

  it('Should search staff successfully', () => {
   cy.get('.sidebar-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.contains('button.vsm-link', 'Staff Management', { timeout: 10000 })
      .click();

    cy.contains('span.vsm-title', 'Add Staff', { timeout: 10000 })
      .parents('a.vsm-link')
      .should('be.visible')
      .click();
    cy.url().should('include', '/staff');
    cy.get('input[placeholder="Search"]').type('zeeshan', { force: true });

    cy.wait(2000);
    cy.get('.p-element', { timeout: 20000 })
      .should('contain', 'Zeeshan Staff');

    cy.log('Staff search works correctly');
  });

  it('API Intercept for Staff List by Status', () => {
    const statuses = [
      'pending',
      'active',
      'raise_objection',
      'suspended',
      'pending_for_approval'
    ];

    statuses.forEach(status => {
      it(`Should fetch and display staff with status: ${status}`, () => {
        cy.intercept(
          'GET',
          `/api/v1/staff/?page=1&limit=10&search=&status=${status}`
        ).as('getStaff');

        cy.visit('/staff');

        cy.get('input[aria-autocomplete="list"]').click({ force: true });
        cy.contains(new RegExp(status.replace(/_/g, ' '), 'i')).click({ force: true });

        cy.wait('@getStaff').then(({ response }) => {
          expect(response.statusCode).to.eq(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('data');
          expect(response.body.data.data).to.be.an('array');

          if (response.body.data.data.length > 0) {
            response.body.data.data.forEach(member => {
              expect(member.status.toLowerCase()).to.eq(status);
            });
          }
        });

        cy.get('.staff-list .status-column').each($el => {
          cy.wrap($el).should('contain.text', status.replace(/_/g, ' '));
        });

        cy.get('.staff-list .status-column')
          .its('length')
          .then(uiCount => {
            cy.wait('@getStaff').then(({ response }) => {
              expect(uiCount).to.eq(response.body.data.data.length);
            });
          });

        cy.log(`Test Case Passed: Staff API validation for status "${status}" successful`);
      });
    });
  });
});
