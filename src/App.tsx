import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';
import { Clients } from './containers/clients';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: 0,
        backgroundColor: "#00150F",
        overflow: "hidden"
      }}
    >
      <Header />
      <Clients />
    </Container>
  );
}

export default App;
