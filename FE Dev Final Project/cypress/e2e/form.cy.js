describe("Form Tests (Create Set and Add Card)", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.get('[id="cardSetPage"]').click();
    });

    // Add New Set — Happy Path
    it("Create a new Set - happy path", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get('[id="titleInput"]').type("JavaScript");
        cy.get("input[type='submit']").click();

        // Verify set appears
        cy.contains("JavaScript").should("exist");
    });

    // Add New Set — UnHappy Path: User add empty string card
    it("Create a new Set - Unhappy path empty name", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get("input[type='submit']").click();

        // Verify empty field error appears
        cy.contains("TITLE CANNOT BE EMPTY").should("exist");
    });

    //Add new set and add a card to it - Happy Path
    it("Create a new Set - happy path", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get('[id="titleInput"]').type("JavaScript");
        cy.get("input[type='submit']").click();

        // Verify set appears
        cy.contains("JavaScript").should("exist");

        // Add cards to the JavaScript Set
        cy.get("[data-cy='5']").click();
        cy.get('[data-cy="toggle_form"]').click();

        cy.get('[id="termInput"]').type("JavaScript Card");
        cy.get('[id="descriptionInput"]').type("JavaScript Card Description");
        cy.get("input[type='submit']").click();

        // Verify set appears
        cy.get('[class="cardPageContainer"]')
            .contains("JavaScript Card")
            .should("exist");
    });

    //Add new set and add a card to it - UnHappy Path
    it("Create a new Set - happy path", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get('[id="titleInput"]').type("JavaScript");
        cy.get("input[type='submit']").click();

        // Verify set appears
        cy.contains("JavaScript").should("exist");

        // Add cards to the JavaScript Set
        cy.get("[data-cy='5']").click();
        cy.get('[data-cy="toggle_form"]').click();

        cy.get('[id="termInput"]').type("JavaScript Card");
        cy.get("input[type='submit']").click();

        // Verify empty field error appears
        cy.get('[class="error"]').contains("CANNOT BE EMPTY").should("exist");
    });
});
