// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('login', (email, password)=> {
  cy.request({
    method: 'POST',
    url: 'https://strukshur-api-stage.strukshur.com/app_stage.php/login_check',
    body: {
      _password: '12345678',
      _remember_me: true,
      _username: 'luis.cardozo+new+pro+annual+premium+20012020@scalablepath.com'
    }
  }).then((res)=> {
    console.log(res);
    window.localStorage.setItem('jwt', res.body.token)
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
