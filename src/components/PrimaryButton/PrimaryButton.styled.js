import styled from '@emotion/styled';
import { theme } from 'styles';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  border-radius: 100px;

  color: ${theme.colors.white};
  background: ${theme.colors.accent};
  transition: color ${theme.baseTransition}, background ${theme.baseTransition};
  &:hover,
  &:focus {
    background: ${theme.colors.buttonHover};
    color: ${theme.colors.accent};
  }
`;
