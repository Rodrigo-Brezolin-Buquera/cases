import { CompetitionBusiness } from "../../src/business/Business";
import { STATUS } from "../../src/model/Competitions";
import { CompetitionDatabaseMock } from "../database/DatabaseMock";
import { findBestResultsMock } from "../services/findBestResultsMock";
import { generateIdMock } from "../services/IdGeneratorMock";
import { mockCompetion } from "./inputsMocks";

const competitionBusiness = new CompetitionBusiness(
  new CompetitionDatabaseMock(),
  generateIdMock,
  findBestResultsMock
);

describe("Tests on findCompetition method", () => {
  test("Sucess case with name as string", async () => {
    expect.assertions;
    try {
      const name = { name: "ongoing" };
      const result = await competitionBusiness.findCompetition(name);
      expect(result).toEqual(mockCompetion(STATUS.ongoing));
    } catch (error) {}
  });

  test("Sucess case with no name ", async () => {
    expect.assertions;
    try {
      const name = { name: "" };
      const result = await competitionBusiness.findCompetition(name);
      console.log(result);
      expect(result).toEqual(mockCompetion(STATUS.finished));
    } catch (error) {}
  });

  test("Fail case with no name ", async () => {});
});


