import styled from '@emotion/styled';
import { theme } from 'styles';

const position = window.innerWidth < theme.sizes.tablet ? '14px' : '24px';

export const StyledButton = styled.button`
  position: absolute;
  right: ${position};
  top: ${position};
  fill: ${props => props.fill ?? theme.colors.darkText};
  transition: fill ${theme.baseTransition};

  &:hover,
  &:focus {
    scale: 110%;
    fill: ${props => props.hoverFill ?? theme.colors.darkBackground};
  }
`;
