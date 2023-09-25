import { Section, Container } from 'App.styled';
import { products } from 'utils/products';
import { ProductItem } from './components/ProductItem';
import { ProductsTitle, TitleAccent } from './OurProducts.styled';

export const OurProducts = () => {
  return (
    <Section>
      <Container>
        <ProductsTitle>
          Our <TitleAccent>products</TitleAccent>
        </ProductsTitle>
        {products.map(product => (
          <ProductItem key={product.id} product={product}></ProductItem>
        ))}
      </Container>
    </Section>
  );
};
