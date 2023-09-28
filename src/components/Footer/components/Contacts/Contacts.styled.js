import styled from '@emotion/styled';

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactTitle = styled.p`
  text-align: start;
  display: flex;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  margin-bottom: 14px;
  color: ${props => props.theme.colors.white};
`;

export const Contact = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${props => props.theme.colors.white};
`;

export const ContactLink = styled.a`
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.28;
    color: ${props => props.theme.colors.white};
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.accent};
    }
`