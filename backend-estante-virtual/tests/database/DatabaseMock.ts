import { CompetitionRepository } from "../../src/business/Repository";
import { Competition, STATUS } from "../../src/model/Competitions";
import { CompetitionResults } from "../../src/model/CompetitionsResults";
import { CompetitionStatusInputDTO } from "../../src/model/DTO";

export class CompetitionDatabaseMock implements CompetitionRepository {
  async findCompetition(name: string): Promise<Competition[]> {
  const competion: Competition = {
     id: "id",
    name: "name",
    status: name ? STATUS.ongoing : STATUS.finished, // uma forma simples para testar o erro nos dois casos 
  }
  return [competion]
}

  async findCompetitionResults(
    competition: string
  ): Promise<CompetitionResults[]> {
    const results = [{
      id: "id",
      competition: "teste",
      athlete: "testão da silva",
      value: 12,
      metric: "s"
    }]
    return results;
  }
  async findAllCompetition(): Promise<Competition[]> {
    const competion: Competition = {
      id: "id",
     name: "name",
     status: STATUS.finished, 
   }
   return [competion]
  }
  async createCompetition(newCompetition: Competition): Promise<void> {}
  async addResult(result: CompetitionResults): Promise<void> {}
  async changeStatus({
    name,
    status,
  }: CompetitionStatusInputDTO): Promise<void> {}
}
