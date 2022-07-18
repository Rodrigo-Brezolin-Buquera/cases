import { CustomError } from "./CustomError";

export class CompetitionNotFound extends CustomError {
    constructor() {
      super("There is no competition yet", 404);
    }
  }