import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';

function App() {
  return (
    <main>
      <Section>
        <Container>
          <p>Hello BITE</p>
          <HowItsMade />
        </Container>
      </Section>
    </main>
  );
}

export default App;
