import { Container } from 'App.styled';
import { useModal } from 'hooks/useModal';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Modal } from 'components/Modal/Modal';
import { FormOderBuy } from 'components/OderBuy/OderBuy';
import {
  BackgroundWrapper,
  HeroSection,
  Title,
  Link,
  ButtonLinkWrapper,
  ContentWrapper,
} from './Hero.styled';

export const Hero = () => {
  const { isModalOpen, openModal, closeModal } = useModal(); // test button 'Buy now' and modal, delete
  return (
    <>
      <HeroSection id="home">
        <Container>
          <BackgroundWrapper>
            <ContentWrapper>
              <Title>
                Treat yourself or a loved one to our finest ingredients for a
                moment of pure delight!
              </Title>
              <ButtonLinkWrapper>
                <ButtonBgOrange action={openModal} smallFontSize={'14px'} />
                <Link href="#made">How it’s made</Link>
              </ButtonLinkWrapper>
            </ContentWrapper>
          </BackgroundWrapper>
        </Container>
      </HeroSection>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <FormOderBuy action={closeModal} />
        </Modal>
      )}
    </>
  );
};
