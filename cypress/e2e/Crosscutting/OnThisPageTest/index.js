/// <reference types="Cypress" />
import { And, Then } from 'cypress-cucumber-preprocessor/steps';
 
Then('{string} is displayed', (otpTitle) => {
    cy.get('.on-this-page').contains(otpTitle).should('be.visible');
});

And('OTP links have the following {string}', (options) => {
    const expectedOptions = options.split(',');
    for (let i = 0; i < expectedOptions.length; i++) {
        cy.get('#cgvBody section h2').eq(i).invoke('text').then((text) => {
            expect(text.trim()).equal(expectedOptions[i]);
        });
    }
});

And('OTP links have the {string} as follows', (options) => {
    const expectedOptions = options.split(',');
    for (let i = 0; i < expectedOptions.length; i++) {
        cy.get('#cgvBody ul li a').eq(i).should('be.visible').and('have.attr', 'href', expectedOptions[i]);
    }
});

Then('on this page section title is not displayed', () => {
    cy.get('.on-this-page').should('not.be.visible');
});

And('on this page accordion is displayed', () => {
    cy.get('div.accordion').should('be.visible');
});

And('all of the accordion items are collapsed', () => {
    cy.get('#cgvBody section h2').should('have.attr', 'aria-expanded', 'false');
});

Then('On This page section does not exist', () => {
    cy.get('.on-this-page').should('not.exist');
});