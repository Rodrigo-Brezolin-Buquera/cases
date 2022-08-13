import { Business } from "../business/Business";
import { Request, Response } from "express";
import { DataInputDTO } from "../model/types";

const business = new Business();
export class Controller {
  public findData = async (req: Request, res: Response): Promise<void> => {
    const result = await business.findData();
    res.status(200).send(result);
  };

  public insertData = async (req: Request, res: Response): Promise<void> => {
    const input: DataInputDTO = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      participation: req.body.participation
    }
  
    await business.insertData(input);
    res.status(201).send({message: "dados inseridos"});
  };


}
