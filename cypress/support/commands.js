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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setAuthCookies', () => {
  cy.setCookie(
    'next-auth.session-token',
    'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiZml4ZWQgdXNlciIsImVtYWlsIjoiZml4ZWRVc2VyQGVtYWlsLmNvbSIsInVzZXIiOnsibmFtZSI6ImZpeGVkIHVzZXIiLCJlbWFpbCI6ImZpeGVkVXNlckBlbWFpbC5jb20ifSwiYWNjZXNzVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlTV1FpT2pFMExDSnBZWFFpT2pFMk16QXhNalk1TlROOS4zNWZlNGtJUmIxMUZMSzNPUU9RbURkZzNJT3dzSFlESldxUkhJcjZMZ3hrIiwiaWF0IjoxNjMwMTI2OTk0LCJleHAiOjE2MzI3MTg5OTR9.1hR81FDFmeTY3yVJ71dQBrTUvfX0PgYSRx1GXGBgbcnS8CLBv-2s69MYR2k7woXcTP9dZ_F_0dLMo506o-EUzw',
    {
      httpOnly: true,
      sameSite: 'lax'
    }
  )
  cy.setCookie(
    'next-auth.csrf-token',
    '267f17b669a768fa000efed9235faea37f89fb35e4cc6f23d9c5563a8529955b%7Cd94093df15cbacfc1d71bf4fb89ea27abcf7aa710cd509d6585701842e25ac0d',
    {
      httpOnly: true,
      sameSite: 'lax'
    }
  )
  cy.setCookie(
    'next-auth.callback-url',
    'http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsignin',
    {
      sameSite: 'lax'
    }
  )
})
