Feature: Testar Tela de Login

    Background: Testar as funcionalidades de Cadastrar um Novo Usuário
     Given acesso a tela de Login

    Scenario: [01] Criar um novo usuário
        When insiro as informações do usuário "Admin" corretamente
        And farei o login com o novo usuário cadastrado
        Then serei encaminhado para a tela de "Admin"