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



describe("Tests on changeStatus method", () => {
    test("Sucess case", async () => {
        expect.assertions;
        try {
        const input = {name: "test", status: STATUS.ongoing }
          const result = await competitionBusiness.changeStatus(input);
          expect(result).toBe(undefined);
        } catch (error: any) {}
      });

      test("Fail case with no name", async () => {
        expect.assertions;
        try {
        const input = {name: "", status: STATUS.ongoing }
        await competitionBusiness.changeStatus(input);
         
        } catch (error: any) {
            expect(error.message).toContain("There is no competition yet")
            expect(error.code).toBe(404)
        }
      });

      test("Fail case with no Status", async () => {
        expect.assertions;
        try {
        const input = {name: "test", status: "" as STATUS }
          const result = await competitionBusiness.changeStatus(input);
          expect(result).toBe(undefined);
        } catch (error: any) {
            expect(error.message).toContain("Invalid Status - it must be ongoing or finished");
            expect(error.code).toBe(400)
        }
      });


});
