import {loginElements as elements} from "../elements/login-elements"

class LoginPageObjects{
    accessScreenSignIn(){
        cy.visit('https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/login.html')
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

    adminScreen(){
        cy.url().should('be.equal', 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/login-index.html')
    }

    homePageScreen(){
        cy.url().should('be.equal', 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/home-page.html')
    }
} 

export default new LoginPageObjects()