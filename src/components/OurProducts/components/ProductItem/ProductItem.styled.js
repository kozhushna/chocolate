import styled from '@emotion/styled';

export const ItemImage = styled.img`
  margin: 0 auto 8px;
`;

export const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
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
