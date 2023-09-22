import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.mainBackground};
  padding-bottom: 72px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-bottom: 128px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 0 32px;
    width: ${props => props.theme.sizes.tablet};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop};
  }
`;
