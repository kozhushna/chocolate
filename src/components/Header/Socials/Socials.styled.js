import styled from '@emotion/styled';
import { theme } from 'styles';

export const SocialsStyled = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 18px;
  @media screen and (${theme.devices.tablet}) {
    left: 32px;
    bottom: 24px;
  }
  @media screen and (${theme.devices.desktop}) {
    position: static;
    margin-left: 137px;
  }
`;

export const SocialBtn = styled.a`
  display: flex;
  & > svg {
    fill: ${props => props.theme.colors.white};
    transition: fill ${props => props.theme.baseTransition};
    @media screen and (${theme.devices.desktop}) {
      fill: ${props => props.theme.colors.primaryText};
    }
  }
  &:hover > svg,
  &:focus > svg {
    fill: ${props => props.theme.colors.accent};
  }
`;
