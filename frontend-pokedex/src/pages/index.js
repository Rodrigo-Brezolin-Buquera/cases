import HomePage from '@/screens/Home';
import dynamic from 'next/dynamic';

// const DynamicPage = dynamic(()=> import('@/screens/Home'), {
//   loading: ()=> <p>Loading... dynamico</p>
// }) 
// aparentemente não teve nenhuma diferença significativa, talvez funcione apenas com componentes menores

export default function Home() {
 
  return (
   <HomePage/>
  )
}
