import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Login step - capture {string} pour matcher "admin", "Administrator", etc.
Given("I am logged in as a {string}", (userType: string) => {
  cy.visit("https://express-bank-link.lovable.app/");
  cy.get("input[data-testid='login-username']").type(userType.toLowerCase());
  cy.get("input[data-testid='login-password']").type(userType.toLowerCase());
  cy.wait(2000); // it is a bad practice to wait for 2 seconds, but I want the user to see what's happning for now
  cy.get("button[data-testid='login-submit']").click();
});

Given("I am logged in as a admin", () => { // I could have used "I am logged in as a {string}" but the gherkin is clearer this way
  cy.visit("https://express-bank-link.lovable.app/");
  // fill the form fields
  cy.get("input[data-testid='login-username']").type("admin"); // hardcoded for now
  cy.get("input[data-testid='login-password']").type("admin"); // hardcoded for now
  cy.wait(2000);
  cy.get("button[data-testid='login-submit']").click();
});
