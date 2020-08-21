describe('dodum thing', () => {
    describe('Im not sure yet lol', () => {
        it('can navigate to http://localhost:3000', () => {
            cy.visit('http://localhost:3000')
            cy.url().should('include', 'localhost')
        })
        it('can type something in the "email" input', () =>{
            cy.get('input[name="email"]')
            .type('Have fun')
            .should('have.value', 'Have fun')
        })
        it('can type something in the "password" input', () =>{
            cy.get('input[name="password"]')
            .type('Have no fun')
            .should('have.value', 'Have no fun')
        })
        it('can type something in the "name" input', () =>{
            cy.get('input[name="name"]')
            .type('Have no fun')
            .should('have.value', 'Have no fun')
        })
    })
})