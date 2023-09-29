import { Section, Container, Title, Accent } from 'App.styled';
import { PaginationBox, SliderContainer } from './OurProducts.styled';

import { ProductSlider } from './components/ProductSlider/ProductSlider';

export const OurProducts = () => {
  return (
    <Section id="products">
      <Container>
        <Title>
          Our <Accent>products</Accent>
        </Title>
      </Container>
      <SliderContainer>
        <ProductSlider />
        <PaginationBox className="pagination-container"></PaginationBox>
      </SliderContainer>
    </Section>
  );
};
