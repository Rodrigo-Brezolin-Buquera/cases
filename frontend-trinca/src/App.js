import { ChakraProvider } from '@chakra-ui/react'
import theme from './constants/theme';
import Router from './routes/router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
