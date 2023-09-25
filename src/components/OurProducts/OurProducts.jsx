import { Section, Container } from 'App.styled';
import {
  ProductsTitle,
  TitleAccent,
  PaginationBox,
} from './OurProducts.styled';

import { ProductSlider } from './components/ProductSlider/ProductSlider';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <ProductsTitle>
          Our <TitleAccent>products</TitleAccent>
        </ProductsTitle>
        <ProductSlider />
        <PaginationBox className="pagination-container"></PaginationBox>
      </Container>
    </Section>
  );
};
