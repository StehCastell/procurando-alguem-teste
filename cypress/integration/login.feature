Feature: Testar Tela de Login

    Background: Testar as funcionalidades da Tela de Login
        Given acesso a tela de Login

    Scenario: Login usuário administrador com sucesso
        When insiro as informações do usuário "Admin" corretamente
        Then serei encaminhado para a tela de Administrador

    Scenario: Login usuário comum com sucesso
        When insiro as informações do usuário "Comum" corretamente
        Then serei encaminhado para a tela de Home Page