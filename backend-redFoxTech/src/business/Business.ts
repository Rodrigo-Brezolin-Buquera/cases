import { Database } from "../data/Database";
import { CustomError } from "../error/CustomError";

const database = new Database();
export class Business {
  async findAllPokemon() {
    try {

      const result = await database.findAllPokemon()
      return result
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async populate() {
    try {
      await database.populate();
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }
}
