
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./header"


function App() {
  return (
    <ChakraProvider>
      <Header/>
        <p>Serviços</p>
      <p>Avaliações</p>
    </ChakraProvider>
  )
}


export default App;
