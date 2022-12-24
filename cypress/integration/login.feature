Feature: Testar Tela de Login

    Background: Testar as funcionalidades da Tela de Login
        Given acesso a tela de Login

    Scenario: [01] Login usuário administrador com sucesso
        When insiro as informações do usuário "Admin" corretamente
        Then serei encaminhado para a tela de "Admin"

    Scenario: [02] Login usuário comum com sucesso
        When insiro as informações do usuário "Comum" corretamente
        Then serei encaminhado para a tela de "Home Page"

    Scenario: [03] Login com o usuário errado
        When insiro o usuario "batata" e senha "123"
        Then deverá mostrar uma mensagem de erro

    Scenario: [04] Login com a senha errada
        When insiro o usuario "user" e senha "batata"
        Then deverá mostrar uma mensagem de erro