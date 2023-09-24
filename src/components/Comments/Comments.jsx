import { Container, Section } from 'App.styled';
import { Accent, Title } from './Comments.styled';
import { Slider } from './components/Slider/Slider';

export const Comments = () => {
  return (
    <Section>
      <Container>
        <Title>
          Chocolate <Accent>is loved</Accent>
        </Title>
        <Slider />
      </Container>
    </Section>
  );
};
