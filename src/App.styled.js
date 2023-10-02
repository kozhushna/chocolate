import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.mainBackground};
  padding-bottom: 72px;
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

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-bottom: 128px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: auto;
  text-align: center;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 0 32px;
    width: ${props => props.theme.sizes.tablet}px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
  }
`;

export const FeatureContainerStyled = styled.div`
  background-color: ${props => props.theme.colors.darkBackground};
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 50px;
    font-size: 24px;
    line-height: 1.166667;
    letter-spacing: -0.72px;
  }
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;
