
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains scoreboard', ()=>{
            cy.get('.scores').should('be.visible');
        });
    });
});