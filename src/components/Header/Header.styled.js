import styled from '@emotion/styled';
import { Container } from 'App.styled';
import { theme } from 'styles';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 14px;
  background-color: ${props => props.theme.colors.mainBackground};
  z-index: 2;
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const BurgerMenu = styled.button`
  display: flex;
  & > svg {
    transition: fill ${props => props.theme.baseTransition};
  }
  @media screen and (${theme.devices.desktop}) {
    display: none;
  }
  &:hover > svg,
  &:focus > svg {
    fill: ${props => props.theme.colors.accent};
  }
`;
