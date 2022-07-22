import * as path from "path";
import { PokemonData } from "../model/types";
import readXlsxFile from "read-excel-file/node";

const filePath = path.resolve(__dirname, "PokemonGo.xlsx");

export const fetchXLSXData = async (): Promise<PokemonData[]> => {
  const pokemonList = await readXlsxFile(filePath).then((rows: any[]) =>
    rows.map((row: any[]): PokemonData => {
      return {
        name: row[1],
        pokedexNumber: row[2],
        imgName: row[3],
        generation: row[4],
        evolutionStage: row[5],
        evolved: row[6],
        familyID: row[7],
        crossGen: row[8],
        type1: row[9],
        type2: row[10],
        weather1: row[11],
        weather2: row[12],
        statTotal: row[13],
        atk: row[14],
        def: row[15],
        sta: row[16],
        legendary: row[17],
        aquireable: row[18],
        spawns: row[19],
        regional: row[20],
        raidable: row[21],
        hatchable: row[22],
        shiny: row[23],
        nest: row[24],
        new: row[25],
        notGettable: row[26],
        futureEvolve: row[27],
        CP40: row[28],
        CP39: row[29],
      };
    })
  );
  pokemonList.shift();
  return pokemonList;
};
