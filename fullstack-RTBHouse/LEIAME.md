# Case-RTBHouse

## Desenvolvido por:
**Rodrigo Brezolin Buquera**

## Status:
**Concluído**

## Descrição
O teste técnico consiste em um backend que envia dados referentes às vendas de produtos, enquanto o frontend consome esses dados, expondo-os em uma tabela.

O backend, construído com Node/Express, possui apenas um endpoint estruturado em três camadas. Os dados são buscados de duas tabelas em memória e organizados para serem consumidos pelo frontend. Todos os métodos foram construídos de forma assíncrona para simular uma situação real de acesso a um banco de dados. Foram realizados testes unitários e um teste E2E.

O frontend, construído em React e styled-components(CSS), consiste em uma página única que recebe esses dados e os organiza em uma tabela, na qual é possível filtrar e ordenar os itens. É sempre possível retornar ao estado inicial. Para simular o tempo de resposta da API, foi adicionado um atraso, além da inclusão de uma animação de carregamento. A responsividade para celulares não foi considerada.

Em caso de dúvidas, por favor, entre em contato.

## Tecnologias utilizadas
### Frontend 
- React.js - Axios - Styled-components - Eslint

### Backend 
- Node.js - Typescript - Express - Eslint - Jest - Supertest

## Kanban utilizado
[Quadro no Trello](https://trello.com/b/7OrNGHoE/case-rtb-house-rodrigo-brezolin)

## Rodando localmente com npm  

### Passos
**1º | Clone o repositório:**
```bash
    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-RTBHouse.git
```
**2º | Dentro da pasta raiz, acesse a pasta do backend via terminal:**
```bash
    cd rtbhouse-server/ 
```
**3º | Instale as dependências com:**
```bash
   npm install
```
**4º | Inicie a aplicação com:**
```bash
   npm run start
```
**5º | Em outro terminal, ainda na pasta raiz, acesse a pasta do frontend via terminal:**
```bash
    cd rtbhouse-client/
```
**6º | Instale as dependências com:**
```bash
   npm install
```  
**7º | Inicie a aplicação com:**
```bash
   npm run start
``` 
**8º | Acesse a aplicação pelo navegador:**
[http://localhost:3000/](http://localhost:3000/)
