import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react'
import { Header } from '@/components/header/Header';
import { removeFromPokedex } from '@/store/reducers/pokedex';
import PokemonCard from '@/components/pokemonCard/PokemonCard';

export default function PokedexPage() {
  const dispatch = useDispatch();
  const pokedex = useSelector((state) => state.pokedex)

  
  const removePokedex = useCallback((pokemon) => {
    dispatch(removeFromPokedex(pokemon))
  }, [dispatch])


  return (
    <div>
      <Header />
       <h2> Pokedex</h2>
      <main>
       
        {pokedex?.length ? 
        pokedex.map(i => <PokemonCard key={i.id} pokemon={i} handler={removePokedex} />) 
        :
        <p>Pokedex vazia</p>
         }

      </main>
    </div>
  )

}
