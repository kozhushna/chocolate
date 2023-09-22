import { Section, Container } from 'App.styled';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { theme } from 'styles';

function App() {
  const handleClick = () => {
    console.log('Button');
  };

  return (
    <main>
      <Section>
        <Container>
          <p>Hello BITE pull pasha!</p>
          <PrimaryButton action={handleClick} title="Send" />
          <PrimaryButton
            action={handleClick}
            title="Send"
            style={{ border: `1px solid ${theme.colors.darkText}` }}
          />
        </Container>
      </Section>
    </main>
  );
}

export default App;
