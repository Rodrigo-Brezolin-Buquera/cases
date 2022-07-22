import { Database } from "../data/Database";
import { CustomError } from "../error/CustomError";
import { setFilters } from "./setFilters";

const database = new Database();
export class Business {
  async findAllPokemon(input: any) {
    try {
     const filters = setFilters(input)
      const result = await database.findAllPokemon(filters);

      if(result.length < 1){
        throw new CustomError("Nenhum pokemon encontrado", 404)
      }


      return result;
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
