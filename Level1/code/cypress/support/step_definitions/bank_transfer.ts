import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the bank transfer page", () => {
  // Check the presence of the page title
  cy.contains("Transfer System", { timeout: 10000 }).should("be.visible"); 
  // Check the presence of the form fields
  cy.get("input[data-testid='beneficiary-name']").should("be.visible");
  cy.get("input[data-testid='iban']").should("be.visible");
  cy.get("input[data-testid='label']").should("be.visible");
  cy.get("input[data-testid='amount']").should("be.visible");
  // Check the presence of the submit button
  cy.get("button[data-testid='transfer-submit']").should("be.visible");
  // check the URL
  cy.url().should("include", "/transfer");
});


When("I fill in the transfer details", () => {
  // fill the form fields
  cy.get("input[data-testid='beneficiary-name']").type("John Doe");
  cy.get("input[data-testid='iban']").type("FR7630006000011234567890189");
  cy.get("input[data-testid='label']").type("Test transfer");
  cy.get("input[data-testid='amount']").type("100");
});


When("I select scheduled transfer mode and fill in the transfer date", () => {
  cy.get("button[data-testid='transfer-mode-scheduled']").click();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const transferDate = tomorrow.toISOString().split('T')[0];
  cy.get("input[data-testid='transfer-date']").type(transferDate);
});

When("I select Instant transfer mode", () => {
  cy.get("button[data-testid='transfer-mode-instant']").click();
}); 


When("I click the transfer button", () => {
  // click the submit button
  cy.get("button[data-testid='transfer-submit']").click();
});

Then("I should see a success message : {string}", (message: string) => {
  cy.contains(message, { timeout: 10000 }).should("be.visible");
});


When("I fill an IBAN too short in the IBAN field", () => {
  cy.get("input[data-testid='iban']").type("FR12");
});

When("I fill all the fields except the IBAN", () => {
  cy.get("input[data-testid='beneficiary-name']").type("John Doe");
  cy.get("input[data-testid='label']").type("Test transfer");
  cy.get("input[data-testid='amount']").type("100");
});

Then("I should see an error message {string}", (message: string) => {
  // check the error message
  cy.get('body').should('contain', message);

});



