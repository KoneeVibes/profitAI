import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';
import { Clients } from './containers/clients';
import { Discover } from './containers/discover';
import { Features } from './containers/features';
import { Tools } from './containers/tools';
import { Partners } from './containers/partners';
import { Team } from './containers/team';
import { Tokenomics } from './containers/tokenomics';
import { Roadmap } from './containers/roadmap';

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
      <Partners />
      <Team />
      <Tokenomics />
    </Container>
  );
}

export default App;
