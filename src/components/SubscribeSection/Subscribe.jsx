import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';

import { Container, Section } from 'App.styled';
import { Title } from './Subscribe.styled';

export const Subscribe = () => {
  const handleClick = () => {
    console.log('subscribe clicked');
  };

  return (
    <Section>
      <Container>
        <Title>Explore our new chocolate first</Title>
        <ButtonBgOrange action={handleClick} title={'Subscribe'} />
      </Container>
    </Section>
  );
};
