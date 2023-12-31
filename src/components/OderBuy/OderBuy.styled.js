import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import PhoneInput from 'react-phone-input-2';
import { FormTitle } from 'components/ReviewForm/ReviewForm.styled';

export const StyledDiv = styled(ModalContent)`
  padding: 32px 24px 32px 24px;
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 609px;
    padding: 48px;
  }
`;

export const StyledFormTitle = styled(FormTitle)`
  margin-right: auto;
  margin-left: auto;
  width: 125px;
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

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
  @media screen and (${props => props.theme.devices.onlymobile}) {
    row-gap: 14px;
    flex-direction: column;
  }
`;

export const StyledLabel = styled.div`
  margin-left: 10px;
  color: 000;
  font-size: 12px;
  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  width: 100%;
  border-radius: 13px;
  padding: 22px;
  font-size: 14px;
  color: ${props => props.theme.colors.primaryText};
  border: 1.5px solid ${props => props.theme.colors.inputBorder} !important;
  box-shadow: ${props => props.theme.inputBoxShadow} !important;

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent} !important;
    outline: none !important;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 18px;
  }
`;

export const PhoneStyled = styled(PhoneInput)`
  .form-control {
    width: 100%;
    /* padding: 22px 56px; */
    font-size: 14px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: ${props => props.theme.colors.primaryText};
    border-radius: 13px;
    border: 1.5px solid ${props => props.theme.colors.inputBorder} !important;
    box-shadow: ${props => props.theme.inputBoxShadow} !important;

    @media screen and (${props => props.theme.devices.tablet}) {
      padding: 22px 64px;
      font-size: 18px;
      letter-spacing: -0.36px;
    }

    &:hover,
    :focus,
    :active {
      border-color: ${props => props.theme.colors.accent} !important;
      outline: none !important;
    }
  }
  .selected-flag {
    padding-left: 18px;
    &::before {
      border: none;
      box-shadow: none;
    }

    &.open {
      &::before {
        border: none;
        box-shadow: none;
      }
    }

    @media screen and (${props => props.theme.devices.tablet}) {
      padding-left: 24px;
    }
  }
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  font-size: 14px;
  width: 100%;
  height: 137px;
  border-radius: 13px;
  padding: 22px;
  color: ${props => props.theme.colors.primaryText};
  border: 1.5px solid ${props => props.theme.colors.inputBorder} !important;
  box-shadow: ${props => props.theme.inputBoxShadow} !important;
  resize: none;

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent} !important;
    outline: none !important;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 22px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;
