describe("User can navigate", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // WORKSHOPS
  describe("to /Workshops route and it", () => {
    beforeEach(() => {
      cy.get("#workshops-tab").click();
    });

    it("should contain workshop course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("should contain component name in url", () => {
      cy.url().should("contain", "workshops-tab");
    });
  });

  // TESTING
  describe("to /Testing route", () => {
    beforeEach(() => {
      cy.get("#testing-tab").click();
    });

    it("should contain Testing course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("component name should be in url", () => {
      cy.url().should("contain", "testing-tab");
    });
  });

  // VUE
  describe("to /Vue route", () => {
    beforeEach(() => {
      cy.get("#vue-tab").click();
    });

    it("should contain Vue course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("component name should be in url", () => {
      cy.url().should("contain", "vue-tab");
    });
  });

  // PRODUCTIVITY
  describe("to /Productivity route", () => {
    beforeEach(() => {
      cy.get("#productivity-tab").click();
    });

    it("should contain Vue course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("component name should be in url", () => {
      cy.url().should("contain", "productivity-tab");
    });
  });

  // NODEREACT
  describe("to /NodeReact route", () => {
    beforeEach(() => {
      cy.get("#nodereact-tab").click();
    });

    it("should contain NodeReact course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("component name should be in url", () => {
      cy.url().should("contain", "nodereact-tab");
    });
  });

  // BACK
  describe("back to landing page by clicking Craft Logo and it ", () => {
    beforeEach(() => {
      cy.get("#craftname-tab").click();
    });

    it("should redirect and display all courses", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING");
    });
  });
});