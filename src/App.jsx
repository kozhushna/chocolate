import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import TasteSensation from 'components/TasteSensation/TasteSensation';

function App() {
  return (
    <main>
      <Section>
        <Container>
        <TasteSensation/>
        </Container>
      </Section>
      <Section>
        <Container>
          <p>Hello BITE pull pasha!</p>
          <HowItsMade />
        </Container>
      </Section>
      
    </main>
  );
}

export default App;
