import styled from '@emotion/styled';
import { ButtonBgOrange } from 'components/ButtonBgOrange/ButtonBgOrange';
import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

export const StyledDiv = styled(ModalContent)`
  @media screen and (${theme.devices.tablet}) {
    width: 609px;
    padding: 48px;
  }
`;

export const StyledForm = styled.form``;

export const Wrapper = styled.div`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  column-gap: 22px;
`;

export const StyledLabel = styled.div`
  margin-left: 10px;
  color: 000;
  font-size: 12px;
  @media screen and (${theme.devices.tablet}) {
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  width: 100%;
  border: 1.6px solid;
  border-radius: 13px;
  border-color: ${theme.colors.inputBorder};
  padding: 22px;
  font-size: 14px;
  color: ${theme.colors.inputText};
  @media screen and (${theme.devices.tablet}) {
    font-size: 18px;
  }
  /* display: flex;
  column-gap: 22px; */
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  height: 137px;
  border: 1.6px solid;
  border-radius: 13px;
  border-color: ${theme.colors.inputBorder};
  padding: 22px;
  font-size: 18px;
  color: ${theme.colors.inputText};
  resize: none;
  /* display: flex;
  column-gap: 22px; */
`;

export const StyledButton = styled(ButtonBgOrange)`
  @media screen and (${theme.devices.tablet}) {
    font-size: 14px;
  }
`;
