import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  Anchor,
  AnchorListItem,
  AnchorsList,
  Backdrop,
  CloseBtn,
  NavStyled,
} from './Nav.styled';

export const Nav = ({ children, isOpen, onClick }) => {
  const hendleBackdropClick = e => {
    if (window.innerWidth > 1199) {
      return;
    }
    if (e.target.tagName === 'NAV' || e.target.tagName === 'UL') {
      return;
    }
    onClick();
  };
  return (
    <Backdrop
      className={isOpen ? 'open' : 'close'}
      onClick={hendleBackdropClick}
    >
      <NavStyled className={isOpen ? 'open' : 'close'}>
        <CloseBtn type="button" onClick={onClick}>
          <Svg w={28} h={28} icon="close" />
        </CloseBtn>
        <AnchorsList>
          <AnchorListItem>
            <Anchor href="#home">Home</Anchor>
          </AnchorListItem>
          <AnchorListItem>
            <Anchor href="#made">How it’s made?</Anchor>
          </AnchorListItem>
          <AnchorListItem>
            <Anchor href="#products">Our products</Anchor>
          </AnchorListItem>
          <AnchorListItem>
            <Anchor href="#top-sellers">Top sellers</Anchor>
          </AnchorListItem>
          <AnchorListItem>
            <Anchor href="#comments">Chocolate is loved</Anchor>
          </AnchorListItem>
        </AnchorsList>
        {children}
      </NavStyled>
    </Backdrop>
  );
};
