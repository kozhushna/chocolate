import { Container, Section } from 'App.styled';
import { Accent, PaginationBox, StyledButton, Title } from './Comments.styled';
import { Slider } from './components/Slider/Slider';

export const Comments = () => {
  return (
    <Section>
      <Container>
        <Title>
          Chocolate <Accent>is loved</Accent>
        </Title>
        <Slider />
        <PaginationBox className="pagination-box" />
        <StyledButton>Leave a review</StyledButton>
      </Container>
    </Section>
  );
};
