import { Container } from 'App.styled';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import {
  ContentHolder,
  SubscribeSection,
  TextContent,
  Title,
} from './Subscribe.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { SubscribeFoprm } from 'components/SubscribeForm/SubscribeForm';

export const Subscribe = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <SubscribeSection>
        <Container>
          <ContentHolder>
            <Title>Explore our new chocolate first</Title>
            <TextContent>
              From the velvety texture to the rich and complex flavor, our New
              Chocolate is a true indulgence that will leave you craving more.
              Made with only the finest ingredients and handcrafted with the
              utmost care, each piece is a work of art that is sure to please.
            </TextContent>
            <ButtonBgOrange action={openModal} title={'Subscribe'} />
          </ContentHolder>
        </Container>
      </SubscribeSection>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <SubscribeFoprm action={closeModal} />
        </Modal>
      )}
    </>
  );
};
