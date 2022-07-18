import { Competition } from "../model/Competitions";
import { CompetitionResults } from "../model/CompetitionsResults";
import { CompetitionStatusInputDTO } from "../model/DTO";

export interface CompetitionRepository {
  findCompetition(name: string): Promise<Competition[]>;
  findCompetitionResults(competition: string): Promise<CompetitionResults[]>;
  findAllCompetition(): Promise<Competition[]>;
  createCompetition(newCompetition: Competition): Promise<void>;
  addResult(result: CompetitionResults): Promise<void>;
  changeStatus({ name, status }: CompetitionStatusInputDTO): Promise<void>;
}


