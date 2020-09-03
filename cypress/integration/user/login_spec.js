describe('login', ()=> {
  beforeEach(()=>{
    cy.visit('/')
    cy.contains('I\'m a Homeowner').click()
    cy.get('.btn-login').click()
  })

  it('link to Forgot Password', ()=> {
    cy.contains('Forgot your password?')
      .should('have.attr', 'ng-click', 'ForgotPassword()')
  })

  it('requires email', ()=> {
    cy.get('#submit').click()
    cy.get('.modal-login').should('contain', 'Invalid login. Please try again.')
  })

  it('requires password', ()=> {
    cy.get('#email').type('luis.cardozo+new+pro+annual+premium+20012020@scalablepath.com{enter}')
    cy.get('.modal-login').should('contain', 'This field is required')
  })

  it('requires valid email and password', ()=> {
    cy.get('#email').type('luis.cardozo+new+pro+annual+premium+20012020@scalablepath.com{enter}')
    cy.get('#_password').type('1234Abcdefg{enter}')
    cy.get('.modal-login').should('contain', 'Invalid login. Please try again.')
  })

  it('navigate to Gallery on successful login', ()=> {
    cy.get('#email').type('luis.cardozo+new+pro+annual+premium+20012020@scalablepath.com')
    cy.get('#_password').type('12345678{enter}')
    cy.url().should('contain', 'gallery')
  })
})
