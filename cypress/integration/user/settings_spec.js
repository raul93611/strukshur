describe('settings', ()=> {
  beforeEach(()=> {
    cy.login('luis.cardozo+new+pro+annual+premium+20012020@scalablepath.com', '12345678')
    cy.visit('/account-settings')
  })

  it('Basic tab selected', ()=> {
    cy.get('[index="\'basic\'"]').should('have.class', 'active')
  })
})
