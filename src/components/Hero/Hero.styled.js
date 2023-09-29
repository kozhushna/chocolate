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

  &[id] {
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
  }
`;

export const BackgroundWrapper = styled.div`
  padding-top: 395px;
  padding-bottom: 28px;
  margin: 0 auto;
  text-align: center;

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

export const Link = styled.a``;
// export const BackgroundHolder = styled.div

//   width: 100%;
//   min-height: 600px;
//   background-image: url(${mobileBackground});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   border-radius: 50px;

//   @media screen and (${props => props.theme.devices.retina}),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${mobileBackground2x});
//   }

//   @media screen and (${props => props.theme.devices.tablet}) {
//     background-image: url(${tabletBackground});

//     @media screen and (${props => props.theme.devices.retina}),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url(${tabletBackground2x});
//     }
//   }

//   @media screen and (${props => props.theme.devices.desktop}) {
//     background-image: url(${desktopBackground});

//     @media screen and (${props => props.theme.devices.retina}),
//       (min-resolution: 192dpi),
//       (min-resolution: 2dppx) {
//       background-image: url(${desktopBackground2x});
//     }
//   }
// `;
