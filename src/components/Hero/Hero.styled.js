import styled from '@emotion/styled';
import { theme } from 'styles';

import mobileBackground from '../../images/Hero/hero-mobile.jpg';
import mobileBackground2x from '../../images/Hero/hero-mobile@2x.jpg';
import tabletBackground from '../../images/Hero/hero-tablet.jpg';
import tabletBackground2x from '../../images/Hero/hero-tablet@2x.jpg';
import desktopBackground from '../../images/Hero/hero-desktop.jpg';
import desktopBackground2x from '../../images/Hero/hero-desktop@2x.jpg';

export const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 72px;

  &::before {
    content: '';
    display: block;
    height: 62px;
    margin-top: -62px;
    @media screen and (${props => props.theme.devices.tablet}) {
      height: 80px;
      margin-top: -80px;
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 50px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-bottom: 72px;
  }
`;

export const BackgroundWrapper = styled.div`
  padding-top: 395px;
  padding-bottom: 28px;
  margin: 0 auto;

  background-color: ${props => props.theme.colors.darkBackground};
  background-image: linear-gradient(${theme.linerGradient}),
    url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50px;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(${theme.linerGradient}),
      url(${mobileBackground2x});
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    background-image: linear-gradient(${theme.linerGradient}),
      url(${tabletBackground});
    padding-top: 671px;
    padding-bottom: 40px;

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(${theme.linerGradient}),
        url(${tabletBackground2x});
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    background-image: linear-gradient(${theme.linerGradient}),
      url(${desktopBackground});
    padding-top: 381px;
    padding-bottom: 60px;

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(${theme.linerGradient}),
        url(${desktopBackground2x});
    }
  }
`;

export const Title = styled.h1`
  max-width: 295px;
  color: ${props => props.theme.colors.white};
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 484px;
    font-size: 28px;
    line-height: 1.2143;
    letter-spacing: -0.84px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
  }
`;

export const Link = styled.a`
  display: inline-block;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid;
  border-color: ${theme.colors.white};
  border-radius: 100px;
  color: ${theme.colors.white};
  background: ${theme.colors.darkBackground};
  transition: color ${theme.baseTransition}, background ${theme.baseTransition},
    border-color ${theme.baseTransition};

  &:hover,
  &:focus {
    background: ${theme.colors.white};
    color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }

  @media screen and (${theme.devices.tablet}) {
    padding: 14px 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 20px;

  @media screen and (${theme.devices.tablet}) {
    margin-left: 40px;
  }
`;

export const ButtonLinkWrapper = styled.div`
  display: flex;
  gap: 14px;
`;
