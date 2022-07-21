import { Request, Response } from "express";


export class Controller {
 
  
  async findCompetition(req: Request, res: Response) {
    try {
 

      res.status(200).send({  });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }


}
