import {loginElements as elements} from "../elements/login-elements"

class LoginPageObjects{
    accessScreenSignIn(){
        cy.visit(`${(Cypress.config().baseUrl)}usuario/login.html`)
    }

    enterUser(user){
        cy.get(elements.user).type(user)
    }

    enterPassword(user){
        cy.get(elements.password).type(user)
    }

    clickButtonSignIn(){
        cy.get(elements.buttonSignIn).click()
        cy.wait(1000)
    }

    mainScreen(user){
        if(user == "Admin"){                
            cy.url().should('be.include', 'usuario/login-index.html')
        } else {
            cy.url().should('be.include', 'usuario/home-page.html')
        }
    }

    messageAlert(message){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message)
        })
        cy.on('window:confirm', () => true);        
    }
} 

export default new LoginPageObjects()