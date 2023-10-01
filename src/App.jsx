import { Section, Container,FeatureContainerStyled } from 'App.styled';
import HowItsMade from './components/HowItsMade/HowItsMade';
import { Comments } from 'components/Comments/Comments';
import TasteSensation from 'components/TasteSensation/TasteSensation';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { FormOderBuy } from 'components/OderBuy/OderBuy';
import { OurProducts } from 'components/OurProducts/OurProducts';
import Features from 'components/Features/Features';


function App() {
  const { isModalOpen, openModal, closeModal } = useModal(); // test button 'Buy now' and modal, delete

  return (
    <main>
      
      <Section>
        <Container>
          <TasteSensation />
        </Container>
      </Section>
      <Section>
        <FeatureContainerStyled>
        <Container>
            <Features />
          </Container>
          </FeatureContainerStyled>
      </Section>
      <Section>
        <Container>
          <HowItsMade />
        </Container>
      </Section>
      <OurProducts />
      <Comments />
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
