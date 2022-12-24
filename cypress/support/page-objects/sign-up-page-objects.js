import {signUpElements as elements} from "../elements/sign-up-elements"

class SignUpPageObjects{
    clickButtonSignUp(){
        cy.get(elements.buttonSignUp).click()
    }

    insertLogin(login){
        cy.get(elements.login).type(login)
    }

    insertFullName(fullName){
        cy.get(elements.fullName).click().type(fullName)
    }

    insertEmail(email){
        cy.get(elements.email).type(email)
    }

    insertFirstPassword(password){
        cy.get(elements.firstPassword).click().type(password)
    }

    insertSecondPassword(password){
        cy.get(elements.secondPassword).type(password)
    }

    clickButtonCreateAccount(){
        cy.get(elements.buttonCreateAccount).click()
        cy.wait(1000)
    }

    clickButtonCancel(){
        cy.get(elements.buttonCancel).click()
    }

    clickCloseX(){
        cy.get(elements.closeX).click()
    }
} 

export default new SignUpPageObjects()