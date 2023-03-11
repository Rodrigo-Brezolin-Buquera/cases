import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default api;



export const getPokemon = async (limit = 10, offset = 0) => {
  let result = []
  const { data } = await api.get(`?limit=${limit}&offset=${offset}`) // mudar aqui para paginação

  for (let item of data.results) {
    const pokemon = await getPokemonDetail(item.name)
    result = [...result, toModelPokemon(pokemon)]

  }
  return result
};

export const getPokemonDetail = async (name) => {
  const res = await api.get(`${name}`)
  return res.data
}

export const toModelPokemon = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(i=>i.type.name),
    image: pokemon.sprites.other["official-artwork"].front_default
  }
}

export const toModelPokemonDetails = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(i=>i.type.name),
    image: pokemon.sprites.other["official-artwork"].front_default,
    frontImage: pokemon.sprites.front_default,
    backImage: pokemon.sprites.back_default,
    moves: pokemon.moves.slice(0, 10).map(i=>i.move.name),
    stats: pokemon.stats.map(i=> {return { base_stat: i.base_stat, name: i.stat.name }} )
  }
}