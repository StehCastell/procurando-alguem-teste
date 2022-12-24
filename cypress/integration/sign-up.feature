Feature: Testar Tela de Login

    Background: Testar as funcionalidades de Cadastrar um Novo Usuário
     Given acesso a modal de Cadastrar Novo Usuario

    Scenario: [01] Criar um novo usuário
        When insiro as informacoes corretamente para cadastrar um novo usuario
        Then finalizo o cadastro
        And farei o login com o novo usuario cadastrado