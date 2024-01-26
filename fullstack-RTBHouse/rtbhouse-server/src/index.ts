import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Controller } from "./controller/Controller";
import { Business } from "./business/Business";
import { Database } from "./database/Database";

export const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});

const database = new Database()
const business = new Business(database)
const controller = new Controller(business);

app.get("/productsData", (req, res) => controller.findProductsData(req, res));
