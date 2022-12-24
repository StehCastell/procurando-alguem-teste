import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'
import login from '../page-objects/login-page-objects'
import signUp from '../page-objects/sign-up-page-objects'

Given('acesso a modal de Cadastrar Novo Usuario', () => {
    login.accessScreenSignIn()
    signUp.clickButtonSignUp()
})

//Scenario 01 e 02
When('insiro as informacoes corretamente para cadastrar um novo usuario', () => {
    signUp.insertLogin('batata')
    signUp.insertFullName('Batata Castellano')
    signUp.insertEmail('batata@teste.com')
    signUp.insertFirstPassword('batata')
    signUp.insertSecondPassword('batata')
    cy.wait(1000)
})

Then('finalizo o cadastro', () => {
    signUp.clickButtonCreateAccount()
    login.messageAlert('Cadastro de Usuário Concluído. Prossiga com o login!')
    signUp.clickCloseX()
})

And('farei o login com o novo usuario cadastrado', () => {
    login.enterUser('batata')    
    login.enterPassword('batata')
    login.clickButtonSignIn()
    login.mainScreen('Home Page')
})