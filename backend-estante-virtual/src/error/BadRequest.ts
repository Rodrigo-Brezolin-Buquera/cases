import { CustomError } from "./CustomError";

export class BadRequest extends CustomError {
    constructor() {
      super("Competition, athlete, value and metric are mandatory", 400);
    }
  }