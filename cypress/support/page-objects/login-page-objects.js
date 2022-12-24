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

    mainScreen(user){
        if(user == "Admin"){                
            cy.url().should('be.equal', 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/login-index.html')
        } else {
            cy.url().should('be.equal', 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/home-page.html')
        }
    }

    messageError(){
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Usuário ou Senha incorretos!')
        })
        cy.on('window:confirm', () => true);
    }
} 

export default new LoginPageObjects()