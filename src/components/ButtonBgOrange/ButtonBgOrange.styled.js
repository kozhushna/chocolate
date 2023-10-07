import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  border-radius: 100px;

  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.accent};
  transition: color ${props => props.theme.baseTransition},
    background ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.buttonHover};
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: ${props => props.smallFontSize ?? '18px'};
    padding: 14px 40px;
  }
`;
