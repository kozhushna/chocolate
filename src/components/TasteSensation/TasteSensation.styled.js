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
  color: #111;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;
