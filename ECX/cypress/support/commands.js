// // ***********************************************
// // Custom Cypress Commands
// // ***********************************************
// //
// // This file defines reusable commands for logging in 
// // with different roles (superadmin, clinicadmin, doctor).
// //
// // Supported Roles:
// // - superadmin   → Logs in with superadmin credentials
// // - clinicadmin → Logs in with clinic admin credentials + OTP
// // - doctor      → Logs in with doctor credentials + OTP
// //
// // Each role uses credentials stored in Cypress.env()
// // (set inside cypress.config.js or via CLI).
// //
// // Example Usage in Tests:
// // cy.loginAs('superadmin');
// // cy.loginAs('clinicadmin');
// // cy.loginAs('doctor');
// //
// // ***********************************************

// Cypress.Commands.add('loginAs', (role = 'superadmin') => {
//   cy.session([role], () => {
//     cy.log("🔑 Logging in as role:", role);
//     cy.visit('https://portal.eyecarex.com/', { timeout: 20000 });

//     //
//     // SUPERADMIN LOGIN FLOW
//     //
//     if (role === 'superadmin') {
//       cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('USER_NAME'));
//       cy.get('input[formcontrolname="password"]').type(Cypress.env('USER_PASSWORD'));
//       cy.get('button.btn.login-btn').click();

//       // ✅ Verify dashboard loads
//       cy.url().should('include', '/main/dashboard/analytics');
//     }

//     //
//     // CLINIC ADMIN LOGIN FLOW (with OTP)
//     //
//     if (role === 'clinicadmin') {
//       cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('CLINIC_USER'));
//       cy.get('input[formcontrolname="password"]').type(Cypress.env('CLINIC_PASS'));
//       cy.get('button.btn.login-btn').click();

//       // 🔑 Wait for OTP fields
//       cy.log('Please enter OTP manually (Clinic Admin)...');
//       cy.get('#ngx-otp-input-0', { timeout: 60000 }).should('be.visible');

//       // 🔑 Wait until Submit button is enabled → then click
//       cy.contains('button.btn.login-btn', 'Submit', { timeout: 60000 })
//         .should('be.enabled')
//         .click();

//       // ✅ Handle OTP success popup
//       cy.get('.swal2-confirm', { timeout: 20000 })
//         .should('be.visible')
//         .click();
//     }

//     //
//     // DOCTOR LOGIN FLOW (with OTP)
//     //
//     if (role === 'doctor') {
//       cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('DOCTOR_USER'));
//       cy.get('input[formcontrolname="password"]').type(Cypress.env('DOCTOR_PASS'));
//       cy.get('button.btn.login-btn').click();

//       // 🔑 Wait for OTP fields
//       cy.log('Please enter OTP manually (Doctor)...');
//       cy.get('#ngx-otp-input-0', { timeout: 60000 }).should('be.visible');

//       // 🔑 Wait until Submit button is enabled → then click
//       cy.contains('button.btn.login-btn', 'Submit', { timeout: 60000 })
//         .should('be.enabled')
//         .click();

//       // ✅ Handle OTP success popup
//       cy.get('.swal2-confirm', { timeout: 20000 })
//         .should('be.visible')
//         .click();
//     }
//   });

//   // ✅ Final visit to ensure correct landing page
//   cy.visit('/main/dashboard/analytics');
// });
// ***********************************************
// Custom Cypress Commands
// ***********************************************
//
// This file defines reusable commands for logging in 
// with different roles (superadmin, clinicadmin, doctor).
//
// Supported Roles:
// - superadmin   → Logs in with superadmin credentials
// - clinicadmin → Logs in with clinic admin credentials + OTP
// - doctor      → Logs in with doctor credentials + OTP
//
// Each role uses credentials stored in Cypress.env()
// (set inside cypress.config.js or via CLI).
//
// Example Usage in Tests:
// cy.loginAs('superadmin');
// cy.loginAs('clinicadmin');
// cy.loginAs('doctor');
//
// ***********************************************

Cypress.Commands.add('loginAs', (role = 'superadmin') => {
  cy.session([role], () => {
    cy.log("🔑 Logging in as role:", role);
    cy.visit('https://portal.eyecarex.com/', { timeout: 20000 });

    //
    // SUPERADMIN LOGIN FLOW
    //
    if (role === 'superadmin') {
      cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('USER_NAME'));
      cy.get('input[formcontrolname="password"]').type(Cypress.env('USER_PASSWORD'));
      cy.get('button.btn.login-btn').click();

      // ✅ Verify dashboard loads
      cy.url().should('include', '/main/dashboard/analytics');
    }

    //
    // CLINIC ADMIN LOGIN FLOW (with OTP automation)
    //
    if (role === 'clinicadmin') {
      cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('CLINIC_USER'));
      cy.get('input[formcontrolname="password"]').type(Cypress.env('CLINIC_PASS'));
      cy.get('button.btn.login-btn').click();

      // 🔑 Wait for OTP fields
      cy.get('#ngx-otp-input-0', { timeout: 60000 }).should('be.visible');

      // ✅ Fetch OTP from Gmail
      cy.task('getGmailOTP').then((otp) => {
        cy.log(`📩 OTP received: ${otp}`);
        const otpDigits = otp.toString().split('');

        // Fill OTP digits
        cy.get('input.ngx-otp-input').each(($el, index) => {
          cy.wrap($el).clear().type(otpDigits[index]);
        });
      });

      // 🔑 Submit after OTP entry
      cy.contains('button.btn.login-btn', 'Submit', { timeout: 60000 })
        .should('be.enabled')
        .click();

      // ✅ Handle OTP success popup
      cy.get('.swal2-confirm', { timeout: 20000 })
        .should('be.visible')
        .click();
    }

    //
    // DOCTOR LOGIN FLOW (with OTP automation)
    //
    if (role === 'doctor') {
      cy.get('input[formcontrolname="email_or_username"]').type(Cypress.env('DOCTOR_USER'));
      cy.get('input[formcontrolname="password"]').type(Cypress.env('DOCTOR_PASS'));
      cy.get('button.btn.login-btn').click();

      // 🔑 Wait for OTP fields
      cy.get('#ngx-otp-input-0', { timeout: 60000 }).should('be.visible');

      // // ✅ Fetch OTP from Gmail
      // cy.task('getGmailOTP').then((otp) => {
      //   cy.log(`📩 OTP received: ${otp}`);
      //   const otpDigits = otp.toString().split('');

      //   // Fill OTP digits
      //   cy.get('p-inputotp input.custom-otp-input').each(($el, index) => {
      //     cy.wrap($el).clear().type(otpDigits[index]);
      //   });
      // });

      // 🔑 Submit after OTP entry
      cy.contains('button.btn.login-btn', 'Submit', { timeout: 60000 })
        .should('be.enabled')
        .click();

      // ✅ Handle OTP success popup
      cy.get('.swal2-confirm', { timeout: 20000 })
        .should('be.visible')
        .click();
    }
  });

  // ✅ Final visit to ensure correct landing page
  cy.visit('/main/dashboard/analytics');
});
