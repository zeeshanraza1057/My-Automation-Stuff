describe('Add Clinic and Send Invite', () => {
    it('should fill out the form and send an invite', () => {
 
      cy.visit('http://13.61.16.188/login');
  
      cy.get('.vsm-title').click();
      cy.get('.vsm-title').click();
     
      cy.get('[formcontrolname="owner_first_name"]').type('John');
      cy.get('[formcontrolname="owner_last_name"]').type('Doe');
      cy.get('[formcontrolname="email"]').type('zeeshanraza1057@gmail.com');
      cy.get('[formcontrolname="mobile_number"]').type('033336277');
      cy.get('[formcontrolname="name"]').type('xyz');
      cy.get('[formcontrolname="website"]').type('xyz');
      cy.get('[formcontrolname="bio"]').type('xyz');
      cy.get('[formcontrolname="company_contact_email"]').type('zeeshanraza1057@gmail.com');
      cy.get('[formcontrolname="company_contact_phone_number"]').type('998734983');
      cy.get('[formcontrolname="fax"]').type('998734983');
      cy.get('[type="text"]').click();
      cy.contains('Canada').click();
      cy.get('[type="text"]').click();
      cy.contains('Alberta').click();
      cy.get('[type="text"]').click();
      cy.contains('Brooks').click();
      cy.get('[formcontrolname="office"]').type('998734983');
      cy.get('[formcontrolname="street_address"]').type('123');
      cy.get('[formcontrolname="zip_code"]').type('1243');
      cy.get('[type="button"]').type('1243');
      cy.get('[button type="button"]').click();
      cy.contains('[button type="button"]').click();
  
      // Optional: Verify success message
      cy.contains('Invitation sent').should('be.visible');
    });
  });
  