import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid #fd9222;
  border-radius: 100px;

  color: ${props => props.theme.colors.primaryText};
  transition: color ${props => props.theme.baseTransition},
    background ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 18px;
    padding: 14px 40px;
  }
`;
