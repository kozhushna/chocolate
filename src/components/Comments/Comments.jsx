import { Container, Section } from 'App.styled';
import { Accent, PaginationBox, Title } from './Comments.styled';
import { Slider } from './components/Slider/Slider';
import { ButtonBgWhite } from 'components/ButtonBgWhite/ButtonBgWhite';

export const Comments = () => {
  const handleClick = () => {
    console.log('comment clicked');
  };

  return (
    <Section>
      <Container>
        <Title>
          Chocolate <Accent>is loved</Accent>
        </Title>
        <Slider />
        <PaginationBox className="pagination-box" />
        <ButtonBgWhite action={handleClick} />
      </Container>
    </Section>
  );
};
