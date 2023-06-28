describe("test hello", () => {
  it("user can hit button", () => {
    // input name

    // click hello button
    cy.visit("");
    cy.findByPlaceholderText("name").type("niaw");
    cy.findByRole("button", { name: "hello" }).click();
    cy.findByText("niaw").should("be.visible");
  });
});
