import { Request, Response } from "express";
import { Business } from "../business/Business";
import { QueryInputDTO } from "../model/DTO";

const business = new Business();
export class Controller {
  async findAllPokemon(req: Request, res: Response):Promise<void> {
    try {
      const input: QueryInputDTO = {
        name:req.query.name as string,
        sort:req.query.sort as string,
        order:req.query.order as string, 
        variables: req.query.variables as string,
        type: req.query.type as string,
        generation: Number(req.query.generation),
        size:Number(req.query.size),
        page:Number(req.query.page)
      }

      const result = await business.findAllPokemon(input)

      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async populate(req: Request, res: Response): Promise<void> {
    try {
      await business.populate();

      res.status(201).send({ message: "Table populated" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
