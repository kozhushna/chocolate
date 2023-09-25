import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { OurProducts } from 'components/OurProducts/OurProducts';

function App() {
  return (
    <main>
      <Section>
        <Container>
          <p>Hello BITE</p>
          <TasteSensation />
        </Container>
      </Section>
      <Section>
        <Container>
          <HowItsMade />
        </Container>
      </Section>
      <OurProducts />
      <Comments />
    </main>
  );
}

export default App;
