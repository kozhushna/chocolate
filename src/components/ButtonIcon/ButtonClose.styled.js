import styled from '@emotion/styled';
import { theme } from 'styles';

export const StyledButton = styled.button`
  fill: ${theme.colors.darkText};
  transition: fill ${theme.baseTransition};

  &:hover,
  &:focus {
    scale: 110%;
    fill: ${theme.colors.darkBackground};
  }
`;
