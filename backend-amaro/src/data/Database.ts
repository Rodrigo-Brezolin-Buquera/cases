import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { fetchXLSXData } from "./fetchData";


export class Database extends BaseDatabase {
  private Table = "Pokemon_go";

  async findData(filters: any):Promise<any> {
    try {
      
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async insertData(): Promise<void> {
    try {
     

    
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  private toModelPokemon(obj: any): any {
    return { 
    }
  }
}

export default new Database()