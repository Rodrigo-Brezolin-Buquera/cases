import {AddressInfo} from "net";
import express from "express";
import { CompetitionController } from "./controller/Controller";
import { CompetitionBusiness } from "./business/Business";
import { CompetitionDatabase } from "./data/Database";
import { generateId } from "./services/idGenerator";
import { findBestResults } from "./utils/findBestResults";

const app = express();

app.use(express.json());

const competitionDatabase = new CompetitionDatabase()
const competitionBusiness = new CompetitionBusiness(competitionDatabase, generateId, findBestResults)
const competitionController = new CompetitionController(competitionBusiness)

app.get("/competition", competitionController.findCompetition );

app.post("/competition", competitionController.createCompetition );
app.post("/competition/result", competitionController.addResult);

app.put("/competition/status", competitionController.changeStatus);

const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });