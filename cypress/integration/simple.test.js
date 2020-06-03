describe("My First Test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true)
  })

  it("Visits the kitchen sink", () => {
    cy.visit("https://example.cypress.io")
  })

  it("Finds an element", () => {
    cy.visit("https://example.cypress.io")
    cy.contains("type").click()
  })

  it("Makes an assertion", () => {
    cy.visit("https://example.cypress.io")
    cy.contains("type").click()
    cy.url().should("include", "/commands/actions")
  })
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io")
    cy.pause()
    cy.contains("type").click()
    cy.url().should("include", "/commands/actions")
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
  })
})
