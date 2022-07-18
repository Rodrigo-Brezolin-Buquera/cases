import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/Business";
import { CompetitionInputDTO, CompetitionResultsInputDTO, CompetitionStatusInputDTO } from "../model/DTO";

const competitionBusiness = new CompetitionBusiness()
export class CompetitionController {
  
  async findCompetition(req: Request, res: Response) {
    try {
      const input: CompetitionInputDTO = {
        name: req.query.name as string
      }

     const result = await competitionBusiness.findCompetition(input)

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async createCompetition(req: Request, res: Response) {
    try {
      const input: CompetitionInputDTO = {
        name: req.body.name
      }
      
      await competitionBusiness.createCompetition(input)

      res.status(200).send({ message: "Competition created" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async addResult(req: Request, res: Response) {
    try {
      const input: CompetitionResultsInputDTO ={
        competition: req.body.competition,
        athlete: req.body.athlete,
        value: req.body.value,
        metric: req.body.metric
      }

      await competitionBusiness.addResult(input)

      res.status(200).send({ message: "Results added to the competition"  });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async changeStatus(req: Request, res: Response) {
    try {
      const input: CompetitionStatusInputDTO = {
        name: req.body.name,
        status: req.body.status
      }
      
      await competitionBusiness.changeStatus(input)

      res.status(200).send({ message: "Competition status changed"  });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

}
