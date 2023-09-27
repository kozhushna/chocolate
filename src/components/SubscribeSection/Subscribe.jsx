import { Container } from 'App.styled';
import {
  ContentHolder,
  SubscribeSection,
  TextContent,
  Title,
} from './Subscribe.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';

export const Subscribe = () => {
  const handleClick = () => {
    console.log('subscribe clicked');
  };

  return (
    <SubscribeSection>
      <Container>
        <ContentHolder>
          <Title>Explore our new chocolate first</Title>
          <TextContent>
            From the velvety texture to the rich and complex flavor, our New
            Chocolate is a true indulgence that will leave you craving more.
            Made with only the finest ingredients and handcrafted with the
            utmost care, each piece is a work of art that is sure to please.
          </TextContent>
          <ButtonBgOrange action={handleClick} title={'Subscribe'} />
        </ContentHolder>
      </Container>
    </SubscribeSection>
  );
};
