import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import login from '../page-objects/login-page-objects'

Given('acesso a tela de Login', () => {
    login.accessScreenSignIn()
})

//Scenario 01 e 02
When('insiro as informações do usuário {string} corretamente', (user) => {
    login.enterUser(Cypress.env(`login${user}`))    
    login.enterPassword(Cypress.env(`senha${user}`))
    login.clickButtonSignIn()
})

Then('serei encaminhado para a tela de {string}', (screen) => {
    login.mainScreen(screen)
})

//Scenario 03 e 04
When('insiro o usuario {string} e senha {string}', (user, password) => {
    login.enterUser(user)  
    login.enterPassword(password)
})

Then('deverá mostrar uma mensagem de erro', () => {    
    login.clickButtonSignIn()
    login.messageError()
})