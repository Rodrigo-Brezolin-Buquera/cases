import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default api;



export const getPokemon = async (limit = 10, offset = 0) => {
  let result = []
  const { data } = await api.get(`?limit=${limit}&offset=${offset}`)

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
    types: pokemon.types,
    image: pokemon.sprites.other["official-artwork"].front_default
  }
}