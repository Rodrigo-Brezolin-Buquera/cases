import { useRouter } from "next/router";
import { Header } from "@/components/header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getDetails } from '@/store/reducers/selectedPokemon';
import DetailsCard from "@/components/detailsCard/DetailsCard";


export default function Details() {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.selectedPokemon)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
     id && dispatch(getDetails(id))
  }, [id])

  return (
    <>
      <Header />
        <h2> Detalhes</h2>
      <main>
         { selectedPokemon ===  "carregando" ?  <p>carregando</p> : <DetailsCard pokemon={selectedPokemon}/> }
      </main>
    </>
  )

}