import { Section, Container,FeatureContainerStyled } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import { Subscribe } from 'components/SubscribeSection/Subscribe';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { Footer } from 'components/Footer/Footer';
import { OurProducts } from 'components/OurProducts/OurProducts';
import Features from 'components/Features/Features';
import { Header } from 'components/Header/Header';
import { TopSellers } from 'components/TopSellers/TopSellers';
import { Hero } from 'components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section>
        <FeatureContainerStyled>
        <Container>
            <Features />
          </Container>
          </FeatureContainerStyled>
      </Section>
        <Section>
          <Container>
            <TasteSensation />
          </Container>
        </Section>
        <HowItsMade />
        <OurProducts />
        <TopSellers />
        <Comments />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
