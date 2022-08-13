import {AddressInfo} from "net";
import express from "express";
import { Controller } from "./controller/Controller";
import { Request, Response } from "express";
import "express-async-errors";


const app = express();

app.use(express.json());

const controller = new Controller()

app.get("/data", controller.findData );
app.post("/data", controller.insertData );


const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });

  app.use((err:any, req: Request, res: Response, _:any) => {
    res.status(err.statusCode || 500).send(err.message || err.sqlMessage);
  });