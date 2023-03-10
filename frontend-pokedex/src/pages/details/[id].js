import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getDetails } from '@/store/reducers/selectedPokemon';
import { removeFromPokedex } from '@/store/reducers/pokedex';



export default function Pokedex() {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.selectedPokemon)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
     id && dispatch(getDetails(id))
  }, [id])

  const addPokedex = (pokemon) => {
    dispatch(addToPokedex(pokemon))
  }

  const removePokedex = (pokemon) => {
    dispatch(removeFromPokedex(pokemon))
  }

  return (
    <div>
      <Header />
      <div>
        <p> detalhes</p>
        <p>{selectedPokemon?.name}</p>
      </div>
    </div>
  )

}