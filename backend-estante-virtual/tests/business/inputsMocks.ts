import { STATUS } from "../../src/model/Competitions";

  export const mockResult = {
    id: "id",
    competition: "teste",
    athlete: "testão da silva",
    value: 120,
    metric: "s",
  };
  
  export const mockCompetionResults = [mockResult, mockResult];
  
  export const mockCompetion = (status: STATUS) => [
    {
      id: "id",
      name: "name",
      status,
      results: mockCompetionResults,
    },
  ];