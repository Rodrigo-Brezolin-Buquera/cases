import { CompetitionBusiness } from "../../src/business/Business";
import { STATUS } from "../../src/model/Competitions";
import { CompetitionDatabaseMock } from "../database/DatabaseMock";
import { findBestResultsMock } from "../services/findBestResultsMock";
import { generateIdMock } from "../services/IdGeneratorMock";


const competitionBusiness = new CompetitionBusiness(new CompetitionDatabaseMock(), generateIdMock, findBestResultsMock )

describe("Tests on findCompetition method", ()=>{

const mockCompetionResults = [
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

const mockCompetion = (status: STATUS)=> [{
    id: "id",
   name: "name",
   status,
   results: mockCompetionResults
 }]

 test("Sucess case with name as string", async ()=>{
    const name ={name: "ongoing"}
    const result = await competitionBusiness.findCompetition(name)
    expect(result).toEqual(mockCompetion(STATUS.ongoing))
 })

 test("Sucess case with no name ", async  ()=>{
    const name = {name: ""}
    const result = await competitionBusiness.findCompetition(name)
    console.log(result)
    expect(result).toEqual(mockCompetion(STATUS.finished))
 })

    test("Fail case with no name ", async ()=>{})


})

describe("Tests on createCompetition method", ()=>{

})

describe("Tests on addResult method", ()=>{

})

describe("Tests on changeStatus method", ()=>{

})