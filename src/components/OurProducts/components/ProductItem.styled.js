import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 32px 52px 32px 53px;
  border-radius: 15px;
  border: ${props => `1px solid ${props.theme.colors.light}`};
  background-color: ${props => props.theme.colors.white};
  list-style: none;
`;

export const ItemImage = styled.img`
  margin-bottom: 8px;
`;

export const ItemTitle = styled.p`
  /* color: #111; */
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.36px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const ItemDescr = styled.p`
  color: ${props => props.theme.colors.darkText};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;
  margin-bottom: 18px;
`;

export const ItemPrice = styled.div`
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  border: ${props => `1px solid ${props.theme.colors.light}`};
  width: fit-content;
  margin: 0 auto;
`;
