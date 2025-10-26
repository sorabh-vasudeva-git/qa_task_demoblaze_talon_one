class ProductsPage {

    nameOfUser() {
        return cy.get('#nameofuser');
    }

    verifyLoggedInUser(expectedUsername) {
        this.nameOfUser().should('contain.text', expectedUsername);
    }

    navigationBarBrand() {
        return cy.get('.navbar-brand');
    }

    verifyNavigationBarBrand(expectedText) {
        this.navigationBarBrand().should('contain.text', expectedText);
    }
    verifyProductByName(productName) {
        cy.contains('.card-block', productName).should('be.visible');
    }

    selectCategory(categoryName) {
        cy.contains('.list-group-item', categoryName).click();
    }

    selectProductByName(productName) {
        cy.contains('.hrefch', productName).click();
    }
}

export default new ProductsPage();
