import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps'
import login from '../page-objects/login-page-objects'
import signUp from '../page-objects/sign-up-page-objects'

Given('acesso a modal de Cadastrar Novo Usuario', () => {
    login.accessScreenSignIn()
    signUp.clickButtonSignUp()
})

//Scenario 01 e 02
When('insiro as informacoes para cadastrar um novo usuario {string}, {string}, {string}, {string}, {string}', (user, fullName, email, firtsPassword, secondPassword) => {
    signUp.insertLogin(user)
    signUp.insertFullName(fullName)
    signUp.insertEmail(email)
    signUp.insertFirstPassword(firtsPassword)
    signUp.insertSecondPassword(secondPassword)
    cy.wait(1000)
})

Then('finalizo o cadastro', () => {
    signUp.clickButtonCreateAccount()
    login.messageAlert('Cadastro de Usuário Concluído. Prossiga com o login!')
    signUp.clickCloseX()
})

Then('exibo a mensagem {string}', message => { 
    signUp.clickButtonCreateAccount()
    login.messageAlert(message)
    signUp.clickCloseX()
})