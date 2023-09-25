import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import TasteSensation from 'components/TasteSensation/TasteSensation';

function App() {
  return (
    <main>
      <Section>
        <Container>
          <TasteSensation />
        </Container>
      </Section>
      <Section>
        <Container>
          <HowItsMade />
        </Container>
      </Section>
      <Comments />
    </main>
  );
}

export default App;
