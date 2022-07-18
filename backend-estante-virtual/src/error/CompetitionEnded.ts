import { CustomError } from "./CustomError";

export class CompetitionEnded extends CustomError {
    constructor() {
      super("The competition already ended", 403);
    }
  }