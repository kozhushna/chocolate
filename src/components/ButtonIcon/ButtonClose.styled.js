import styled from '@emotion/styled';

export const StyledButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  fill: ${props => props.fill ?? props.theme.colors.darkText};
  transition: fill ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    right: 24px;
    top: 24px;
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
