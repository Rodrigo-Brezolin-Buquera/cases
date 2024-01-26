# Case-RTBHouse

## Developed by:
**Rodrigo Brezolin Buquera**

## Status:
**Concluded**

## Description
The test consists of a backend that sends data related to product sales, while the frontend consumes this data, displaying it in a table.

The backend, built with Node/Express, has only one endpoint structured in three layers. The data is fetched from two in-memory tables and organized to be consumed by the frontend. All methods were built asynchronously to simulate a real situation of accessing a database. Unit tests and an E2E test have been performed.

The frontend, built in React with styled-components(CSS), consists of a single page that receives the data and organizes it into a table, allowing for item filtering and sorting. It's always possible to return to the initial state. To simulate the API response time, a delay was added, along with the inclusion of a loading animation. The responsiveness for mobile devices was not taken into account.

If you have any questions, please feel free to contact me.

## Technologies used
### Frontend 
- React.js - Axios  - Styled-components - Eslint

### Backend 
- Node.js - Typescript - Express - Eslint - Jest - Supertest

## Kanban used
[Trello Chart](https://trello.com/b/7OrNGHoE/case-rtb-house-rodrigo-brezolin)

## Running it locally with npm  

### Steps
**1º | Clone the repository**
```bash
    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-RTBHouse.git
```
**2º | In the root folder, change to the backend directory via terminal:**
```bash
    cd rtbhouse-server/ 
```
**3º | Install the dependencies with:**
```bash
   npm install
```
**4º | Start the application with:**
```bash
   npm run start
```
**5º | With other terminal, in the root folder, change to the frontend directory:**
```bash
    cd rtbhouse-client/
```
**6º | Install the dependencies with:**
```bash
   npm install
```  
**7º | Start the application with:**
```bash
   npm run start
```
**8º | Access the site via browser:**
[http://localhost:3000/](http://localhost:3000/)
