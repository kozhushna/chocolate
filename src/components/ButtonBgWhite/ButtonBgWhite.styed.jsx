import styled from '@emotion/styled';
import { theme } from 'styles';

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

  color: ${theme.colors.primaryText};
  transition: color ${theme.baseTransition}, background ${theme.baseTransition};

  &:hover,
  &:focus {
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
  }

  @media screen and (${theme.devices.tablet}) {
    font-size: 18px;
    padding: 14px 40px;
  }
`;
