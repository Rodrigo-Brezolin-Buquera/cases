import { BadRequest } from "../error/BadRequest";
import { CompetitionEnded } from "../error/CompetitionEnded";
import { CompetitionNotFound } from "../error/CompetitionNotFound";
import { CustomError } from "../error/CustomError";
import { InvalidName } from "../error/InvalidName";
import { InvalidStatus } from "../error/InvalidStatus";
import { Competition, STATUS } from "../model/Competitions";
import { CompetitionResults } from "../model/CompetitionsResults";
import {
  CompetitionInputDTO,
  CompetitionResultsInputDTO,
  CompetitionStatusInputDTO,
} from "../model/DTO";
import { CompetitionRepository } from "./Repository";

export class CompetitionBusiness {
  constructor(
    private competitionDatabase: CompetitionRepository,
    private generateId: ()=> string,
    private findBestResults :(results: CompetitionResults[]) => CompetitionResults[]
    ){
  }

  async findCompetition({ name }: CompetitionInputDTO): Promise<Competition[]> {
    try {
      const competitionList = name
        ? await this.competitionDatabase.findCompetition(name)
        : await this.competitionDatabase.findAllCompetition();

      if (competitionList.length < 1) {
        throw new CompetitionNotFound();
      }

      let result: Competition[] = [];
      for(let comp of competitionList ){
        const competionResults = await this.competitionDatabase.findCompetitionResults(comp.name);
        result.push({ ...comp, results: this.findBestResults(competionResults) });
      }

      return result;
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async createCompetition({ name }: CompetitionInputDTO): Promise<void> {
    try {
      if (!name) {
        throw new InvalidName();
      }

      const newCompetition: Competition = {
        id: this.generateId(),
        name,
        status: STATUS.ongoing,
      };

      await this.competitionDatabase.createCompetition(newCompetition);
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async addResult(input: CompetitionResultsInputDTO): Promise<void> {
    try {
      const { competition, athlete, value, metric } = input;

      if (!competition || !athlete || !value || !metric ) {
        throw new BadRequest()
      }

      const competitionList = await this.competitionDatabase.findCompetition(
        competition
      );

      if (competitionList.length < 1) {
        throw new CompetitionNotFound();
      }

      const status = competitionList[0].status;

      if (status === STATUS.finished) {
        throw new CompetitionEnded();
      }

      const id = this.generateId();
      const competitionResults: CompetitionResults = {
        id,
        competition,
        athlete,
        value,
        metric,
      };

      await this.competitionDatabase.addResult(competitionResults);
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async changeStatus({
    name,
    status,
  }: CompetitionStatusInputDTO): Promise<void> {
    try {
      const competition = await this.competitionDatabase.findCompetition(name);

      if (competition.length < 1) {
        throw new CompetitionNotFound();
      }

      if (status !== STATUS.ongoing && status !== STATUS.finished) {
        throw new InvalidStatus();
      }

      await this.competitionDatabase.changeStatus({ name, status });
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }
}
