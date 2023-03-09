import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { addToPokedex, getList } from '@/store/reducers/pokemon';
import { getDetails } from '@/store/reducers/selectedPokemon';
import { removeFromPokedex } from '@/store/reducers/pokedex';

export default function MainPage() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon)
  const pokedex = useSelector((state) => state.pokedex)
  const selectedPokemon = useSelector((state) => state.selectedPokemon)


  useEffect(() => {
    dispatch(getDetails("pikachu"))
  }, [])

  console.log(pokemon)
  const addPokedex = (pokemon) => {
    dispatch(addToPokedex(pokemon))
  }

  const removePokedex = (pokemon) => {
    dispatch(removeFromPokedex(pokemon))
  }



  return (
    <div style={{ display: "flex", gap: "3em" }}>
      <div>
        <p> lista pokemon</p>

        {pokemon === "carregando" ? <p>loading</p> : pokemon.map(i => <p key={i.name} onClick={() => addPokedex(i.name)}>{i.name}</p>)}
      </div>
      <div>
        <p> lista pokedex</p>
        {pokedex?.length && pokedex.map(i => <p key={i} onClick={() => removePokedex(i)}>{i}</p>)}

      </div>
      <div>
        <p> detalhes</p>
        <p>{selectedPokemon.name}</p>
      </div>

    </div>
  )
}
