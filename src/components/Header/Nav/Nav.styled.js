import styled from '@emotion/styled';
import { theme } from 'styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 2;
  transition: background-color ${theme.baseTransition};
  &.open {
    pointer-events: all;
    background-color: ${props => props.theme.colors.backdropActive};
  }
  @media screen and (${theme.devices.desktop}) {
    position: static;
    width: auto;
    height: auto;
    pointer-events: all;
  }
`;

export const NavStyled = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  padding-top: 136px;
  padding-left: 45px;
  padding-right: 45px;
  background-color: ${props => props.theme.colors.darkBackground};
  height: 100%;
  transform: translateX(100%);
  transition: transform ${theme.baseTransition};
  z-index: 3;
  &.open {
    transform: translateX(0);
  }
  @media screen and (${theme.devices.tablet}) {
    width: 290px;
    padding-top: 156px;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (${theme.devices.desktop}) {
    transform: translateX(0);
    position: static;
    display: flex;
    width: auto;
    height: auto;
    padding: 0;
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
  text-align: left;
  @media screen and (${theme.devices.desktop}) {
    display: flex;
    gap: 24px;
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
