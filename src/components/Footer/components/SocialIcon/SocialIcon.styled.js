import styled from '@emotion/styled';

export const Icons = styled.div`
  display: flex;
  gap: 14px;
  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 18px;
  }
`;
export const IconsButton = styled.a`
  display: flex;
  & > svg {
    fill: ${props => props.theme.colors.white};
    transition: fill ${props => props.theme.baseTransition};
  }
  &:hover > svg,
  &:focus > svg {
    fill: ${props => props.theme.colors.accent};
  }
`;
