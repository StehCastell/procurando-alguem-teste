Feature: Testar Tela de Login

  Background: Testar as funcionalidades de Cadastrar um Novo Usuário
    Given acesso a modal de Cadastrar Novo Usuario

  Scenario: [01] Criar um novo usuário com sucesso
    When insiro as informacoes para cadastrar um novo usuario "batata", "Batata Castellano", "batata@teste.com", "batata", "batata"
    Then finalizo o cadastro

  Scenario: [02] Falhar ao criar um usuário com as duas senhas diferentes
    When insiro as informacoes para cadastrar um novo usuario "batata", "Batata Castellano", "batata@teste.com", "batata", "beterraba"
    Then exibo a mensagem "As senhas informadas são inválidas"

  Scenario: [03] Falhar ao criar um usuário com dados vazios
    When insiro as informacoes para cadastrar um novo usuario " ", " ", " ", " ", " "
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: [04] Falhar ao criar um usuário com usuário vazio
    When insiro as informacoes para cadastrar um novo usuario " ", "Batata Castellano", "batata@teste.com", "batata", "batata"
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: [05] Falhar ao criar um usuário com Full Name vazio
    When insiro as informacoes para cadastrar um novo usuario "batata", " ", "batata@teste.com", "batata", "batata"
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: [06] Falhar ao criar um usuário com email vazio
    When insiro as informacoes para cadastrar um novo usuario "batata", "Batata Castellano", " ", "batata", "batata"
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: [07] Falhar ao criar um usuário com primeira senha vazia
    When insiro as informacoes para cadastrar um novo usuario "batata", "Batata Castellano", "batata@teste.com", " ", "batata"
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: [08] Falhar ao criar um usuário com segunda senha vazia
    When insiro as informacoes para cadastrar um novo usuario "batata", "Batata Castellano", "batata@teste.com", "batata", " "
    Then exibo a mensagem "Preencha todos os campos obrigatórios!"