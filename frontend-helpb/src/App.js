import Table from './componentes/CustomTable';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const reload = () => {
  window.location.reload();
};

function App() {
  return (
    <Container
    sx={{
      marginTop: 4,
    }}
    >
      <Button
       variant="contained" 
       onClick={reload}
       sx={{
        marginBottom: 4,
      }}
       >Recarregar</Button>
       <Table/>
    </Container>
  );
}

export default App;
