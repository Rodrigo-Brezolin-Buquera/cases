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


describe("Tests on createCompetition method", () => {
  test("Sucess case", async () => {
    expect.assertions;
    try {
      const name = { name: "ongoing" };
      const result = await competitionBusiness.createCompetition(name);
      expect(result).toBe(undefined);
    } catch (error) {}
  });

  test("Fail case with no name", async () => {
    expect.assertions;
    try {
      const name = { name: "" };
      await competitionBusiness.createCompetition(name);
    } catch (error: any) {
      expect(error.message).toContain("Invalid name");
      expect(error.code).toBe(400)
    }
  });
});

