import styled from '@emotion/styled';

export const Navigate = styled.nav`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  text-align: start;
  margin-top: 32px;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-top: 24px;
  }
`;

export const NavList = styled.ul`
  gap: 18px;
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 18px;
  }
`;
export const NavListItem = styled.li`
  color: ${props => props.theme.colors.white};

  &:hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Nav = styled.a`
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: 1.14;
  transition: color ${props => props.theme.baseTransition};
  @media screen and (${props => props.theme.devices.desktop}) {
    line-height: 1.71;
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
