import { CustomError } from "./CustomError";

export class InvalidStatus extends CustomError {
    constructor() {
      super("Invalid Status - it must be ongoing or finished", 400);
    }
  }