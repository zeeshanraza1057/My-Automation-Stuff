Cypress.Commands.add('loginSession', () => {
    cy.session('user', () => {
      cy.visit('http://13.61.16.188/login');
  

      cy.get('formcontrolname=[email_or_username]"').type('superadmin@eyecarex.com');
      cy.get('input[name="password"]').type('superadmin12@$');
      cy.get('.btn login-btn"]').click(); 

    });
  });
  