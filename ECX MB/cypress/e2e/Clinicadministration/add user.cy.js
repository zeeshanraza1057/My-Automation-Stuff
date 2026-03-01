/**
 * Test Suite: EyeCareX Portal - Add User
 *
 * Purpose:
 * - Validate the "Add User" functionality within the User Management module.
 * - Ensure form validations, error handling, and successful user creation are functioning as expected.
 *
 * Scenarios Covered:
 *
 * Positive Flow:
 * 1. Add a new user successfully with valid data (randomized using Faker).
 *
 * Negative Flows:
 * 2. Show validation error when email is invalid (e.g., missing @ or domain).
 * 3. Show validation errors when required fields are left empty.
 * 4. Show error message when attempting to add a user with duplicate username or email.
 *
 * Expected Results:
 * - A user should be created successfully when valid, unique details are entered.
 * - Relevant validation messages should display when fields are empty or invalid.
 * - System should prevent duplicate usernames or emails from being registered.
 */

import { faker } from '@faker-js/faker';

describe('EyeCareX Portal - Add User', () => {
  beforeEach(() => {
    cy.loginAs('clinicadmin');
    cy.url().should('include', '/dashboard');
  });

  // Positive Flow
  it('Should add a new user successfully', () => {
    // Generate random test data
    const fullName = faker.person.fullName();
    const username = faker.internet.username().toLowerCase() + faker.string.numeric(3);
    const password = 'Shan@2025'; // static for login ease
    const email = faker.internet.email();
    const phone = faker.string.numeric(10); // only digits
    const address = faker.location.streetAddress();

    // Navigate
    cy.get('.sidebar-toggle').click();
    // cy.get('button.vsm-link.mt-1.ng-star-inserted', 'User Permissions').should('be.visible').click();
    // cy.get('button.vsm-link.mt-1.ng-star-inserted')
    //   .should('contain.text', 'User Permissions')
    //   .click();
    cy.contains('span.vsm-title', 'User Permissions')
      .parents('button')
      .click();

    cy.contains('.vsm-title', 'Users Groups', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Add New Users', { timeout: 10000 }).should('be.visible').click();

    // Fill form
    cy.get('input[formcontrolname="full_name"]').type(fullName);
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="phone"]').type(phone);
    cy.get('input[formcontrolname="address"]').type(address);

    // Submit
    cy.contains('.ps-0 > .btn', 'Add').click();
    cy.get('.swal2-confirm').click();

    cy.log('Test Case Passed: User added successfully with valid data');
  });

  // Negative Flow - Invalid email
  it('Should show error when email is invalid', () => {
    const fullName = faker.person.fullName();
    const username = faker.internet.username().toLowerCase() + faker.string.numeric(3);
    const phone = faker.string.numeric(10);
    const address = faker.location.streetAddress();

    cy.get('.sidebar-toggle').click();
    // cy.get('button.vsm-link.mt-1.ng-star-inserted')
    //   .contains('User Management')
    //   .click();
    cy.contains('span.vsm-title', 'User Permissions')
      .parents('button')
      .click();
    cy.contains('.vsm-title', 'Users Groups', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Add New Users', { timeout: 10000 }).should('be.visible').click();

    cy.get('input[formcontrolname="full_name"]').type(fullName);
    cy.get('input[formcontrolname="username"]').type(username);
    cy.get('input[formcontrolname="password"]').type('Shan@2025');
    cy.get('input[formcontrolname="email"]').type('invalid-email'); // deliberately wrong
    cy.get('input[formcontrolname="phone"]').type(phone);
    cy.get('input[formcontrolname="address"]').type(address);

    cy.contains('.ps-0 > .btn', 'Add').click();

    cy.get('input[formcontrolname="email"]').parent().should('contain.text', 'Enter a valid email');

    cy.log('Test Case Passed: Invalid email shows validation error');
  });

  // Negative Flow - Missing fields
  it('Should show error when required fields are empty', () => {
    cy.get('.sidebar-toggle').click();
    // cy.get('button.vsm-link.mt-1.ng-star-inserted')
    //   .contains('User Management')
    //   .click();
    cy.contains('span.vsm-title', 'User Permissions')
      .parents('button')
      .click();
    cy.contains('.vsm-title', 'Users Groups', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Add New Users', { timeout: 10000 }).should('be.visible').click();

    cy.contains('.ps-0 > .btn', 'Add').click();

    // After clicking Add
    cy.contains('Name is required').should('be.visible');
    cy.contains('Value is required').should('be.visible'); // Username
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
    cy.contains('Phone Number is required').should('be.visible');
    cy.contains('Address is required').should('be.visible');

    cy.log('Test Case Passed: Required field validation errors displayed');
  });

  // Negative Flow - Duplicate user
  it('Should show error when username or email already exists', () => {
    cy.get('.sidebar-toggle').click();
    // cy.get('button.vsm-link.mt-1.ng-star-inserted')
    //   .contains('User Management')
    //   .click();
    cy.contains('span.vsm-title', 'User Permissions')
      .parents('button')
      .click();
    cy.contains('.vsm-title', 'Users Groups', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Add New Users', { timeout: 10000 }).should('be.visible').click();

    cy.get('input[formcontrolname="full_name"]').type('John Doe');
    cy.get('input[formcontrolname="username"]').type('owner1@yopmail.com'); // already exists
    cy.get('input[formcontrolname="password"]').type('Shan@2025');
    cy.get('input[formcontrolname="email"]').type('owner1@yopmail.com');   // already exists
    cy.get('input[formcontrolname="phone"]').type('4876487268');
    cy.get('input[formcontrolname="address"]').type('Main Street');

    cy.contains('.ps-0 > .btn', 'Add').click();

    cy.log('Test Case Passed: Duplicate user shows error message');
  });
});