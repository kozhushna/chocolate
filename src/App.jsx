import { Section, Container } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import { Subscribe } from 'components/SubscribeSection/Subscribe';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { FormOderBuy } from 'components/OderBuy/OderBuy';
import { OurProducts } from 'components/OurProducts/OurProducts';

function App() {
  const { isModalOpen, openModal, closeModal } = useModal(); // test button 'Buy now' and modal, delete

  return (
    <main>
      <Section>
        <Container>
          <p>Hello BITE</p>
          <TasteSensation />
        </Container>
      </Section>
      <Section>
        <Container>
          <HowItsMade />
        </Container>
      </Section>
      <OurProducts />
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
  );
}

export default App;
