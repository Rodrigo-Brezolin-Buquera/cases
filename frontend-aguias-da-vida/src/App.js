
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./header"
import Information from "./Information";
import Rating from "./rating";


function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Information/>
      <br/>
      <Rating/>
    </ChakraProvider>
  )
}


export default App;
