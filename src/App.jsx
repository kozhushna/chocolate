import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';

function App() {
  const nandleOpenModalOrder = () => {
    console.log('order');
  };
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
      <Comments />
      <ButtonBgOrange action={nandleOpenModalOrder} />
    </main>
  );
}

export default App;
