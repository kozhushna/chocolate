import styled from '@emotion/styled';

export const SubTitle = styled.p`
  margin: 0 auto 50px;
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    max-width: 486px;
  }
`;
