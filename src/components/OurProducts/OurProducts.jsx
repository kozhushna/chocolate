import { Section, Container } from 'App.styled';
import {
  ProductsTitle,
  TitleAccent,
  PaginationBox,
} from './OurProducts.styled';

import { Slider } from './components/Slider/Slider';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <ProductsTitle>
          Our <TitleAccent>products</TitleAccent>
        </ProductsTitle>
        <Slider />
        <PaginationBox className="pagination-container"></PaginationBox>
      </Container>
    </Section>
  );
};
