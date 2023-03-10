import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { Header } from '@/components/Header';
import { removeFromPokedex } from '@/store/reducers/pokedex';

export default function Pokedex() {
  const dispatch = useDispatch();
  const pokedex = useSelector((state) => state.pokedex)

  useEffect(() => {
  }, [])

  const removePokedex = (pokemon) => {
    dispatch(removeFromPokedex(pokemon))
  }


  return (
    <div>
      <Header />
      <div>
        <p> lista pokedex</p>
        {pokedex?.length && pokedex.map(i => <p key={i.id} onClick={() => removePokedex(i)}>{i.name}</p>)}

      </div>
    </div>
  )

}
