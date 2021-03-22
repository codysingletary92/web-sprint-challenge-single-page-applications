describe('Quite App', () => {
    it('example test', () =>{
        expect(true).to.equal(true)
    })

    //helper functions
    // const nameInput= () => cy.get('#nameInput')
    // const emailInput= () => cy.get('#emailInput')
    // const passwordInput= () => cy.get('#passwordInput')
    // const ToSInput= () => cy.get('#ToSInput')
    // const submitbutton= () => cy.get('[type="submit"]')

    beforeEach( () => cy.visit('http://localhost:3000/Pizza'))

    it('visit website', () => {
        cy.visit('http://localhost:3000/Pizza')

    })

    describe('Filling out the input', () =>{
        it('can type the inputs',() => {
            const nameInput= () => cy.get('#nameInput')
            const xcheese = () => cy.get('#xcheese')
            const pep = () => cy.get('#pep')
            const saus= () => cy.get('#saus')
            const bac= () => cy.get("#bac");
            const submitbutton= () => cy.get('[type="submit"]')

            nameInput().type('SuperCody')
            xcheese().check()
            pep().check()
            saus().check()
            bac().check()
            submitbutton().click()
        })
        
    })
})