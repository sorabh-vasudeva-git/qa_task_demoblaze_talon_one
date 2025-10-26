class ProductDetailsPage {
    verifyLoggedInUser(expectedUsername) {
        cy.get('#nameofuser').should('contain.text', `Welcome ${expectedUsername}`);
    }
    verifyProductDetails(productName, productPrice, productDescription) {
        cy.get('.name').should('have.text', productName);
        cy.get('.price-container').should('contain.text', productPrice);
        cy.get('#more-information').should('contain.text', productDescription);
    }
    clickAddToCart() {
        cy.contains('a', 'Add to cart').click();
    }
    clickCartLink() {
        cy.get('#cartur').click();
    }
}

export default new ProductDetailsPage();