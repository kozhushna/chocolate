import styled from '@emotion/styled';

export const ProductsTitle = styled.h2`
  color: ${props => props.theme.colors.primaryText};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  margin-bottom: 32px;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.72px;
    margin-bottom: 50px;
  }
`;

export const TitleAccent = styled.span`
  color: ${props => props.theme.colors.accent};
`;
