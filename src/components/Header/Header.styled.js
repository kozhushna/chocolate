import styled from '@emotion/styled';
import { Container } from 'App.styled';
import { theme } from 'styles';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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
  @media screen and (${theme.devices.desktop}) {
    display: none;
  }
`;
