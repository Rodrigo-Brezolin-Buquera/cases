import { CompetitionRepository } from "../business/Repository";
import { CustomError } from "../error/CustomError";
import { Competition } from "../model/Competitions";
import { CompetitionResults } from "../model/CompetitionsResults";
import { CompetitionStatusInputDTO } from "../model/DTO";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase implements CompetitionRepository {
  private competitionsTable = "Competitions";

  private resultsTable = "Competitions_results";

  async findCompetition(name: string): Promise<Competition[]> {
    try {
      const result = await CompetitionDatabase.connection(
        this.competitionsTable
      )
        .select()
        .where({ name })
        ;
      return result;
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async findCompetitionResults(competition: string): Promise<CompetitionResults[]> {
    try {
      const result = await CompetitionDatabase.connection(
        this.resultsTable
      )
        .select()
        .where({ competition })
        .orderBy("value", "desc")
        
      return result;
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async findAllCompetition(): Promise<Competition[]> {
    try {
      const result = await CompetitionDatabase.connection(
        this.competitionsTable
      ).select();
      return result;
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async createCompetition(newCompetition: Competition): Promise<void> {
    try {
      await CompetitionDatabase.connection(this.competitionsTable).insert({
        id: newCompetition.id,
        name: newCompetition.name,
        status: newCompetition.status,
      });
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async addResult(result: CompetitionResults): Promise<void> {
    try {
      await CompetitionDatabase.connection(this.resultsTable).insert(result);

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
      await CompetitionDatabase.connection(this.competitionsTable)
        .update({
          status,
        })
        .where({ name });
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }
}
