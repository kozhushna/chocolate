import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';
import { Accent, Container, Section, Title } from 'App.styled';
import { PaginationBox } from './Comments.styled';
import { Slider } from './components/Slider/Slider';
import { ButtonBgWhite } from 'components/ButtonBgWhite/ButtonBgWhite';
import { ReviewForm } from 'components/ReviewForm/ReviewForm';

export const Comments = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Section id="comments">
        <Container>
          <Title>
            Chocolate <Accent>is loved</Accent>
          </Title>
          <Slider />
          <PaginationBox className="pagination-box" />
          <ButtonBgWhite action={openModal} />
        </Container>
      </Section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ReviewForm action={closeModal} />
        </Modal>
      )}
    </>
  );
};
