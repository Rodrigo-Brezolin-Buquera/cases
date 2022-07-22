import { Database } from "../data/Database";
import { CustomError } from "../error/CustomError";
import { QueryInputDTO } from "../model/DTO";
import { Pokemon } from "../model/types";
import { setFilters } from "./setFilters";

const database = new Database();
export class Business {
  async findAllPokemon(input: QueryInputDTO): Promise<Pokemon[]> {
    try {
      const filters = setFilters(input);
      const result = await database.findAllPokemon(filters);

      if (result.length < 1) {
        throw new CustomError("Nenhum pokemon encontrado", 404);
      }

      return result;
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async populate(): Promise<void> {
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
