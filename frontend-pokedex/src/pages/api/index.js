import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default api;



export const getPokemon = async (query = `?limit=25&offset=0`) => {
  let result = []
  const { data } = await api.get(query) 
  for (let item of data.results) {
    const pokemon = await getPokemonDetail(item.name)
    result = [...result, toModelPokemon(pokemon)]

  }
  return {result, next: data.next, previous: data.previous}
};

export const getPokemonDetail = async (name) => {
  const res = await api.get(`${name}`)
  return res.data
}

export const toModelPokemon = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(i => i.type.name),
    image: pokemon.sprites.other["official-artwork"].front_default
  }
}

export const toModelPokemonDetails = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map(i => i.type.name),
    image: pokemon.sprites.other["official-artwork"].front_default,
    frontImage: pokemon.sprites.front_default,
    backImage: pokemon.sprites.back_default,
    moves: pokemon.moves.slice(0, 9).map(i => i.move.name),
    stats: pokemon.stats.map(i => { return { base_stat: i.base_stat, name: stats[i.stat.name] } })
  }
}

const stats = {
  hp: "hp",
  attack: "atk",
  defense: "def",
  "special-attack": "sp atk",
  "special-defense": "sp def",
  speed: "speed",

}