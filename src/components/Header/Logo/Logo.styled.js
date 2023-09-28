import styled from '@emotion/styled';

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 18px;
    line-height: 1.333334;
  }
`;

export const LogoAccent = styled.span`
  font-style: italic;
`;
