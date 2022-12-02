import { Database } from "../data/Database";
import { CustomError } from "../error/CustomError";


export class Business {
  async findData(input: any): Promise<void> {
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
}

export default new Business()
