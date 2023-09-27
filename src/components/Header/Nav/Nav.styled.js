import styled from '@emotion/styled';
import { theme } from 'styles';

export const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  background-color: ${props => props.theme.colors.darkBackground};
  height: 100vh;
  z-index: 2;
  /* transform: translateX(100%); */
  transform: translateX(0);
  @media screen and (${theme.devices.tablet}) {
    width: 290px;
  }
  @media screen and (${theme.devices.desktop}) {
    transform: translateX(0);
    position: static;
    display: flex;
    width: auto;
    height: auto;
    background-color: transparent;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  & > svg {
    fill: ${props => props.theme.colors.white};
    transition: fill ${props => props.theme.baseTransition};
  }
  &:hover > svg,
  &:focus > svg {
    fill: ${props => props.theme.colors.accent};
  }

  @media screen and (${theme.devices.desktop}) {
    display: none;
  }
`;

export const AnchorsList = styled.ul`
  padding-top: 136px;
  padding-left: 50px;
  text-align: left;
  @media screen and (${theme.devices.desktop}) {
    display: flex;
    gap: 24px;
    padding: 0;
  }
`;

export const AnchorListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (${theme.devices.desktop}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const Anchor = styled.a`
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: 1.142857;
  transition: color ${props => props.theme.baseTransition};
  @media screen and (${theme.devices.desktop}) {
    color: ${props => props.theme.colors.primaryText};
    line-height: 1.714286;
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
