import elements from "../elements/login-elements"

export class LoginPageObjects{
    constructor () { }

    acessarTelaLogin(){
        cy.visit('https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-2-e1-proj-web-t5-procurando-alguem/src/paginas/usuario/login.html')
    };


}
