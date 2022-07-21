import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { fetchData } from "./fetchData";
import { Pokemon, PokemonData } from "../model/types";

export class Database extends BaseDatabase {
  private pokemonTable = "Pokemon_go";

  async findAllPokemon() {
    try {
      const pokemonList = await Database.connection(this.pokemonTable).select();
      const result = pokemonList.map((poke)=> this.toModelPokemon(poke))

      return result
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

  async populate(): Promise<void> {
    try {
      const pokemonList = await fetchData();
      const promises = pokemonList.map(async (poke) => {
        await Database.connection(this.pokemonTable).insert({
          name: poke.name,
          pokedex_number: poke.pokedexNumber,
          img_name: poke.imgName,
          generation: poke.generation,
          evolution_stage: poke.evolutionStage,
          evolved: poke.evolved,
          family_ID: poke.familyID,
          cross_gen: poke.crossGen,
          type1: poke.type1,
          type2: poke.type2,
          weather1: poke.weather1,
          weather2: poke.weather2,
          stat_total: poke.statTotal,
          atk: poke.atk,
          def: poke.def,
          sta: poke.sta,
          legendary: poke.legendary,
          aquireable: poke.aquireable,
          spawns: poke.spawns,
          regional: poke.regional,
          raidable: poke.raidable,
          hatchable: poke.hatchable,
          shiny: poke.shiny,
          nest: poke.nest,
          new: poke.new,
          not_gettable: poke.notGettable,
          future_evolve: poke.futureEvolve,
          CP40: poke.CP40,
          CP39: poke.CP39,
        });
      });

      await Promise.all(promises);
    } catch (error: any) {
      throw new CustomError(
        error.message || "Error inesperado",
        error.statuCode || 400
      );
    }
  }

 private toModelPokemon(obj: any): Pokemon {
    return {
      name: obj.name,
      pokedexNumber: obj.pokedex_number,
      imgName: obj.img_name,
      generation: obj.generation,
      evolutionStage: obj.evolution_stage,
      evolved: obj.evolved,
      familyID: obj.family_ID,
      status: {
        type1: obj.type1,
        type2: obj.type2,
        weather1: obj.weather1,
        weather2: obj.weather2,
        statTotal: obj.stat_total,
        atk: obj.atk,
        def: obj.def,
        sta: obj.sta,
        CP40: obj.CP40,
        CP39: obj.CP39,
      },
      variables: {
        crossGen: obj.cross_gen ? true : false,
        legendary: obj.legendary ? true : false,
        aquireable: obj.aquireable ? true : false,
        spawns: obj.spawns ? true : false,
        regional: obj.regional ? true : false,
        raidable: obj.raidable ? true : false,
        hatchable: obj.hatchable,
        shiny: obj.shiny ? true : false,
        nest: obj.nest ? true : false,
        new: obj.new ? true : false,
        notGettable: obj.not_gettable ? true : false,
        futureEvolve: obj.future_evolve ? true : false,
      },
    };
  }
}
