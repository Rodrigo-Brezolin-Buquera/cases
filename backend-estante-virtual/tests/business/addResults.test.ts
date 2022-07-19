import { CompetitionBusiness } from "../../src/business/Business";
import { STATUS } from "../../src/model/Competitions";
import { CompetitionDatabaseMock } from "../database/DatabaseMock";
import { findBestResultsMock } from "../services/findBestResultsMock";
import { generateIdMock } from "../services/IdGeneratorMock";
import { mockCompetion, mockResult } from "./inputsMocks";

const competitionBusiness = new CompetitionBusiness(
  new CompetitionDatabaseMock(),
  generateIdMock,
  findBestResultsMock
);

describe("Tests on addResult method", () => {
  test("Sucess case", async () => {
    expect.assertions;
    try {
      const result = await competitionBusiness.addResult(mockResult);
      expect(result).toBe(undefined);
    } catch (error: any) {}
  });

  test("Fail case with no competition ", async () => {
    expect.assertions;
    try {
    const newMockResult = {...mockResult, competition:"" }
       await competitionBusiness.addResult(newMockResult); 
    } catch (error: any) {
        expect(error.message).toContain("Competition, athlete, value and metric are mandatory")
        expect(error.code).toBe(400);
    }
  });

  test("Fail case with no athlete ", async () => {
    expect.assertions;
    try {
    const newMockResult = {...mockResult, athlete:"" }
       await competitionBusiness.addResult(newMockResult);
    } catch (error: any) {
        expect(error.message).toContain("Competition, athlete, value and metric are mandatory");
        expect(error.code).toBe(400)
    }
  });

  test("Fail case with no value ", async () => {
    expect.assertions;
    try {
    const newMockResult = {...mockResult, value:0 }
       await competitionBusiness.addResult(newMockResult);
      
    } catch (error: any) {
        expect(error.message).toContain("Competition, athlete, value and metric are mandatory");
        expect(error.code).toBe(400)
    }
  });

  test("Fail case with no metric ", async () => {
    expect.assertions;
    try {
    const newMockResult = {...mockResult, metric:"" }
       await competitionBusiness.addResult(newMockResult);
      
    } catch (error: any) {
        expect(error.message).toContain("Competition, athlete, value and metric are mandatory");
        expect(error.code).toBe(400)
    }
  });

});
