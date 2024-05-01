import './App.css';
import { Container } from '@mui/material';
import { Header } from './containers/header';

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "var(--cardPadding) var(--pagePadding)",
        backgroundColor: "#00150F",
        overflow: "hidden"
      }}
    >
      <Header />
    </Container>
  );
}

export default App;
