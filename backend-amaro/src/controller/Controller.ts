import { Request, Response } from "express";


export class Controller {
  async findData(req: Request, res: Response):Promise<void> {
    try {
   

      res.status(200).send("result");
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async insertData(req: Request, res: Response): Promise<void> {
    try {
   

      res.status(201).send({ message: "Table populated" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}

export default new Controller()
