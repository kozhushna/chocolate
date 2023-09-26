import { Section, Container } from 'App.styled';
import {
  ProductsTitle,
  TitleAccent,
  PaginationBox,
  SliderContainer,
} from './OurProducts.styled';

import { ProductSlider } from './components/ProductSlider/ProductSlider';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <ProductsTitle>
          Our <TitleAccent>products</TitleAccent>
        </ProductsTitle>
      </Container>
      <SliderContainer>
        <ProductSlider />
        <PaginationBox className="pagination-container"></PaginationBox>
      </SliderContainer>
    </Section>
  );
};
