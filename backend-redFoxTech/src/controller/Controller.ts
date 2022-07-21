import { Request, Response } from "express";
import { Business } from "../business/Business";
import { fetchData } from "../data/fetchData";

const business = new Business();
export class Controller {
  async findAllPokemon(req: Request, res: Response) {
    try {

      const result = await business.findAllPokemon()

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async populate(req: Request, res: Response) {
    try {
      await business.populate();

      res.status(201).send({ message: "Table populated" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
