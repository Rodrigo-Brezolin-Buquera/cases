import { CompetitionResults } from "../../src/model/CompetitionsResults"


export const findBestResultsMock = jest.fn((resultsList: CompetitionResults[]): CompetitionResults[]=>{
 return [
  {
    id: "id",
    competition: "teste",
    athlete: "testão da silva",
    value: 120,
    metric: "s"
  },
  {
    id: "id",
    competition: "teste",
    athlete: "silva",
    value: 12,
    metric: "s"
  } ] 

})





