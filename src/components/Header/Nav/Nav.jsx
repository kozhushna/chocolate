import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  Anchor,
  AnchorListItem,
  AnchorsList,
  CloseBtn,
  NavStyled,
} from './Nav.styled';

export const Nav = ({ children }) => {
  return (
    <NavStyled>
      <CloseBtn type="button">
        <Svg w={28} h={28} icon="close" />
      </CloseBtn>
      <AnchorsList>
        <AnchorListItem>
          <Anchor href="#made">Home</Anchor>
        </AnchorListItem>
        <AnchorListItem>
          <Anchor href="#made">How it’s made?</Anchor>
        </AnchorListItem>
        <AnchorListItem>
          <Anchor href="#products">Our products</Anchor>
        </AnchorListItem>
        <AnchorListItem>
          <Anchor href="#made">Top sellers</Anchor>
        </AnchorListItem>
        <AnchorListItem>
          <Anchor href="#made">Chocolate is loved</Anchor>
        </AnchorListItem>
      </AnchorsList>
      {children}
    </NavStyled>
  );
};
