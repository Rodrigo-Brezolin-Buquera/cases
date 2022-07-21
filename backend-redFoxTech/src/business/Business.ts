import { CustomError } from "../error/CustomError";

export class Business {



  async findCompetition() {
    try {
      
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

}
