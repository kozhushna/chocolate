import styled from '@emotion/styled';
import mobileBackground from '../../images/Subscribe/subcribe-mobile.jpg';
import mobileBackground2x from '../../images/Subscribe/subcribe-mobile@2x.jpg';
import tabletBackground from '../../images/Subscribe/subcribe-tablet.jpg';
import tabletBackground2x from '../../images/Subscribe/subcribe-tablet@2x.jpg';
import desktopBackground from '../../images/Subscribe/subcribe-desktop.jpg';
import desktopBackground2x from '../../images/Subscribe/subcribe-desktop@2x.jpg';

export const SubscribeSection = styled.section`
  max-width: 1200px;
  padding-top: 62px;
  padding-bottom: 62px;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.darkBackground};
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBackground2x});
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 72px;
    padding-bottom: 72px;
    background-image: url(${tabletBackground});

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletBackground2x});
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    background-image: url(${desktopBackground});

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopBackground2x});
    }
  }
`;

export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h2`
  max-width: 291px;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 378px;
    font-size: 24px;
    line-height: 1.16;
    letter-spacing: -0.72px;
  }
`;

export const TextContent = styled.p`
  max-width: 326px;
  color: ${props => props.theme.colors.white};
  font-weight: 400;
  letter-spacing: -0.28px;
  text-align: center;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 467px;
  }
`;
