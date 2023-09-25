import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';

function App() {
  return (
    <main>
      <Section>
        <Container>
          <p>Hello BITE pull pasha!</p>
          <HowItsMade />
        </Container>
      </Section>
      <Comments />
    </main>
  );
}

export default App;
