import styled from '@emotion/styled';

export const Title = styled.h2`
  /* color: ${props => props.theme.colors.white}; */
  color: red;
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
    line-height: 1, 16;
    letter-spacing: -0.72px;
  }
`;
