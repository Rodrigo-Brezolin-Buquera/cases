import {AddressInfo} from "net";
import express from "express";
import { Controller } from "./controller/Controller";



const app = express();

app.use(express.json());

const controller = new Controller()

app.get("/pokemon", controller.findAllPokemon);
app.post("/pokemon/populate", controller.populate);


const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });