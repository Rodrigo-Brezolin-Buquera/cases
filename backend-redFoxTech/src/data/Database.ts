
import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class Database extends BaseDatabase  {




  async findCompetition(name: string){
    try {
    
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }
}
