import { getPokemon } from '@/pages/api'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getList } from '@/store/reducers/pokemon';

export default function MainPage() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon )

  useEffect(()=>{
   dispatch(getList())
  },[])
 
   console.log("estado", pokemon)

  return (
    <>
   
      <p> lista pokemon</p>
    </>
  )
}
