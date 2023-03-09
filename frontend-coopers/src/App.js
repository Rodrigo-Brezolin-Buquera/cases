import { MainPage } from "./pages/mainPage/MainPage";
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../src/constants/theme"
import "@fontsource/montserrat/400.css"
import "@fontsource/poppins/400.css"

function App() {
  return (
    <ChakraProvider theme={theme} >
      <MainPage/>
    </ChakraProvider>
  );
}

export default App;
