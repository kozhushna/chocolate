import { useModal } from 'hooks/useModal';
import { Accent, Container, Section, Title } from 'App.styled';
import img_01_mobile from '../../images/TopSellers/mobile_img_01_@1x.jpg';
import img_01_mobile2 from '../../images/TopSellers/mobile_img_01_@2x.jpg';
import img_02_mobile from '../../images/TopSellers/mobile_img_02_@1x.jpg';
import img_02_mobile2 from '../../images/TopSellers/mobile_img_02_@2x.jpg';
import img_01_tablet from '../../images/TopSellers/tablet_img_01_@1x.jpg';
import img_01_tablet2 from '../../images/TopSellers/tablet_img_01_@2x.jpg';
import img_02_tablet from '../../images/TopSellers/tablet_img_02_@1x.jpg';
import img_02_tablet2 from '../../images/TopSellers/tablet_img_02_@2x.jpg';
import img_01_desktop from '../../images/TopSellers/desktop_img_01_@1x.jpg';
import img_01_desktop2 from '../../images/TopSellers/desktop_img_01_@2x.jpg';
import img_02_desktop from '../../images/TopSellers/desktop_img_02_@1x.jpg';
import img_02_desktop2 from '../../images/TopSellers/desktop_img_02_@2x.jpg';
import img_03_desktop from '../../images/TopSellers/desktop_img_03_@1x.jpg';
import img_03_desktop2 from '../../images/TopSellers/desktop_img_03_@2x.jpg';
import {
  PictureBox,
  ImgStyled,
  PictureOnlyDesktop,
  Description,
  TopSallersFooter,
} from './TopSellers.styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { Modal } from 'components/Modal/Modal';
import { FormOderBuy } from 'components/OderBuy/OderBuy';

export const TopSellers = () => {
  const { isModalOpen, openModal, closeModal } = useModal(); // test button 'Buy now' and modal, delete
  return (
    <>
      <Section id="top-sellers">
        <Container>
          <Title>
            Top<Accent> Sellers</Accent>
          </Title>
          <PictureBox>
            <picture>
              <source
                srcSet={`${img_01_mobile} 1x, ${img_01_mobile2} 2x`}
                media={`(max-width: 767px)`}
              />
              <source
                srcSet={`${img_01_tablet} 1x, ${img_01_tablet2} 2x`}
                media={`(max-width: 1199px)`}
              />
              <source
                srcSet={`${img_01_desktop} 1x, ${img_01_desktop2} 2x`}
                media={`(min-width: 1200px)`}
              />
              <ImgStyled src={img_01_mobile} />
            </picture>
            <picture>
              <source
                srcSet={`${img_02_mobile} 1x, ${img_02_mobile2} 2x`}
                media={`(max-width: 767px)`}
              />
              <source
                srcSet={`${img_02_tablet} 1x, ${img_02_tablet2} 2x`}
                media={`(max-width: 1199px)`}
              />
              <source
                srcSet={`${img_02_desktop} 1x, ${img_02_desktop2} 2x`}
                media={`(min-width: 1200px)`}
              />
              <ImgStyled src={img_01_mobile} />
            </picture>
            <PictureOnlyDesktop>
              <source
                srcSet={`${img_03_desktop} 1x, ${img_03_desktop2} 2x`}
                media={`(min-width: 1200px)`}
              />
              <ImgStyled src={img_01_mobile} />
            </PictureOnlyDesktop>
          </PictureBox>
          <TopSallersFooter>
            <Description>
              Crazy enough chocolate originates from a bean just like the coffee
              bean called Cacao. Cacao has been around for thousands of years
              and was first discovered by the Native American tribe called the
              Mayans.
            </Description>
            <ButtonBgOrange action={openModal} />
          </TopSallersFooter>
        </Container>
      </Section>
      <ButtonBgOrange action={openModal} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <FormOderBuy action={closeModal} />
        </Modal>
      )}
    </>
  );
};
