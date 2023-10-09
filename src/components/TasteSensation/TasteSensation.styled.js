import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding: 0 110px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 326px;
  }
`;

export const SubTitle = styled.p`
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
`;
