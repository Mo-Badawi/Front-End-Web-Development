describe("Navigation Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("Navigates to Home page", () => {
        cy.get('[id="homePage"]').click();
        cy.get('[data-cy="home_header"]')
            .contains("h1", "Study Night")
            .should("be.visible");
    });

    it("Navigates to About page", () => {
        cy.get('[id="aboutPage"]').click();
        cy.get('[data-cy="about_page"]')
            .contains("h2", "About Study Night")
            .should("be.visible");
    });

    it("Navigates to Card Set page", () => {
        cy.get('[id="cardSetPage"]').click();
        cy.get('[data-cy="study-set-header"]')
            .contains("h2", "Study Set Library")
            .should("be.visible");
    });
});
