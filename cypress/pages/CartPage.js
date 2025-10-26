class CartPage {
    getPlaceOrderButton() {
        return cy.contains('button', 'Place Order')
    }

    clickPlaceOrderButton() {
        this.getPlaceOrderButton().click();
    }
    verifyProductInCart(productName) {
        cy.get('tr.success, tr').contains(productName).should('exist')
    }
    fillOrderForm(name, country, city, card, month, year) {
        if (name) cy.get('#name').type(name, { delay: 30 });
        if (country) cy.get('#country').type(country, { delay: 30 });
        if (city) cy.get('#city').type(city, { delay: 30 });
        if (card) cy.get('#card').type(card, { delay: 30 });
        if (month) cy.get('#month').type(month, { delay: 30 });
        if (year) cy.get('#year').type(year, { delay: 30 });
    }
    clickPurchase() {
        this.getPurchaseButton().click();
    }
    getPurchaseButton() {
        return cy.contains('button', 'Purchase');
    }

    // placeOrderDetailsModal() {
    //     return cy.get('#orderModal').find('#orderModalLabel:visible').should('have.text', 'Place order');

    // }
}
export default new CartPage();