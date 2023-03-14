import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react'
import { addToPokedex, getList } from '@/store/reducers/pokemon';
import { Header } from '@/components/header/Header';
import PokemonCard from '@/components/pokemonCard/PokemonCard';
import styles from "@/styles/home.module.scss"


export default function HomePage() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon)

  const addPokedex = useCallback((pokemon) => {
    dispatch(addToPokedex(pokemon))
  }, [dispatch])

  const changeOffset = useCallback((value) => {
    const [baseURL, query] = value.split("/pokemon/")
    dispatch(getList(query))
  }, [dispatch])

  return (
    <>
      <Header />
      <h2> Todos Pokémons</h2>
      <div className={styles["button-cont"]}>
        {pokemon.previous && <button onClick={()=> changeOffset(pokemon.previous)}> Anterior </button>}
        {pokemon.next && <button onClick={()=> changeOffset(pokemon.next)}> Próximos </button>}
      </div>
      <main>
        {pokemon === "carregando" ? <p>loading</p> : pokemon?.result?.map(i => <PokemonCard key={i.id} pokemon={i} handler={addPokedex} />)}
      </main>

    </>
  )
}
