import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';
import { Clients } from './containers/clients';
import { Discover } from './containers/discover';
import { Features } from './containers/features';
import { Tools } from './containers/tools';

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
      <Discover />
      <Features />
      <Tools />
    </Container>
  );
}

export default App;
