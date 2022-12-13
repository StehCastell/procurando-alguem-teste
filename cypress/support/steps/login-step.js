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

//Scenario 01
Then('serei encaminhado para a tela de Administrador', () => {
    login.adminScreen()
})

//Scenario 02
Then('serei encaminhado para a tela de Home Page', () => {
    login.homePageScreen()
})