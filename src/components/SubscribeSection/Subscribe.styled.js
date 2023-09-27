import styled from '@emotion/styled';

export const SubscribeSection = styled.section`
  max-width: 1200px;
  padding-top: 62px;
  padding-bottom: 62px;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.darkBackground};

  /* @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  } */

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  /* @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
  } */
`;

export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Title = styled.h2`
  /* color: ${props => props.theme.colors.white}; */
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
