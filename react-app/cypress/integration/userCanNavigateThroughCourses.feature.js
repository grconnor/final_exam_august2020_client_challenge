describe("User can navigate through courses", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("to /Workshops route", () => {
    beforeEach(() => {
      cy.get("#workshops-tab").click();
    });

    it("should contain workshop course info", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING")
    })

    it("component name should be in url", () => {
      cy.url().should("contain", "workshops-tab");
    });
  });

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

  describe("back to all Courses tab and it", () => {
    beforeEach(() => {
      cy.get("#craftname-tab").click();
    });

    it("should display all listed courses", () => {
      cy.get("#SOMETHING").should("contain", "SOMETHING");
    });
  });
});