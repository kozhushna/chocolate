import { Section, Container, SectionAhchor } from 'App.styled';
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
      <SectionAhchor id="products" />
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
