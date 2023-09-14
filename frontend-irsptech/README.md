## Sobre
### Case Irsptech - Lista de Usuários
Visualização, criação, edição e exclusão de usuários.

## Status:
<b>Concluído</b>

## Desafio pedido
<a href="https://github.com/irsptech/react-test">https://github.com/irsptech/react-test</a>

## Ferramamentas Utilizadas
- react   - react-router-dom   - styled-components  - axios  - redux/toolkit - react-redux - react-confirm-alert - uuid

## API utilizada
<a href="https://randomuser.me/api">https://randomuser.me/api</a>

## Link de acesso
<a href="https://case-irsptech.web.app/">https://case-irsptech.web.app/</a>

## Rodando localmente

<h4>1º | Faça o clone do repositório: </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/case-irsptech.git

<h4>2º | Na pasta do repositório, instale as dependências com o comando: </h4>

   npm install

<h4>3º | Inicie o servidor com o comando: </h4>

   npm run start
 
 <h4>4º | Acesse o site pelo navegador: </h4>
<a href="http://localhost:3000/">http://localhost:3000/</a>


## Funcionalidades
- Página Home
  - Visualizar lista de usuários
  - Filtragem por nome e páis
  - Criação de usuário (modal)
  - Ir para detalhes do usuário
  - Responsividade para mobile

 
- Página de detalhes 
  - Visualizar detalhes do usuário selecionado
  - Exclusão do usuário
  - Edição dos campos atráves de duplo clique no item
  - Retorno para página home
  - Responsividade para mobile


## O que não funciona:

- A API não aceita busca por ID, então para a página de detalhes não quebrar ao ser atualizada é buscado um novo usuário.  
- Não foram feitos testes unitários 

## Vídeo Explicativo
https://www.loom.com/share/4dbd298cb83d43c3b15b48dcf57cb8aa?sid=f1644400-2a3f-42c4-be34-7f58a11daf08