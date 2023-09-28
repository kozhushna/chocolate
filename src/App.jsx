import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import { Subscribe } from 'components/SubscribeSection/Subscribe';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { Footer } from 'components/Footer/Footer';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { FormOderBuy } from 'components/OderBuy/OderBuy';
import { OurProducts } from 'components/OurProducts/OurProducts';
import { Header } from 'components/Header/Header';
import { TopSellers } from 'components/TopSellers/TopSellers';

function App() {
  const { isModalOpen, openModal, closeModal } = useModal(); // test button 'Buy now' and modal, delete

  return (
    <>
      <Header />
      <main>
        <Section>
          <Container>
            <p>Hello BITE</p>
            <TasteSensation />
          </Container>
        </Section>
        <Section id="made">
          <Container>
            <HowItsMade />
          </Container>
        </Section>
        <OurProducts />
        <TopSellers />
        <Comments />
        <Subscribe />
        {/* test start */}
        <ButtonBgOrange action={openModal} />
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <FormOderBuy action={closeModal} />
          </Modal>
          //test finish - button 'Buy now' and modal, delete
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
