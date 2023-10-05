import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

export const FormHolder = styled(ModalContent)`
  @media screen and (${theme.devices.tablet}) {
    width: 609px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 0 auto;
  padding: 48px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 13px;
  padding: 22px;
  font-size: 18px;
`;
