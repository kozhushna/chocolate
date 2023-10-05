import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

import mobileBackground from '../../images/SubscribeForm/subscribe-form-mobile.jpg';
import mobileBackground2x from '../../images/SubscribeForm/subscribe-form-mobile@2x.jpg';
import tabletDesktopBackground from '../../images/SubscribeForm/subscribe-form-tablet-desktop.jpg';
import tabletDesktopBackground2x from '../../images/SubscribeForm/subscribe-form-tablet-desktop@2x.jpg';

export const FormHolder = styled(ModalContent)`
  @media screen and (${theme.devices.tablet}) {
    width: 538px;
  }
`;

export const Form = styled.form`
  padding: 32px 24px;

  @media screen and (${theme.devices.tablet}) {
    padding: 40px;
  }
`;

export const BackgroundWrapper = styled.div`
  height: 169px;
  background-color: ${props => props.theme.colors.darkBackground};
  background-image: url(${mobileBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  @media screen and (${props => props.theme.devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBackground2x});
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 196px;
    background-image: url(${tabletDesktopBackground});

    @media screen and (${props => props.theme.devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletDesktopBackground2x});
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: 42px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors.primaryText};

  padding: 12px 18px;
  border-radius: 25px;
  border: 1.5px solid ${props => props.theme.colors.inputBorder};
  box-shadow: ${props => props.theme.inputBoxShadow};

  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 14px 24px;
    max-height: 46px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.validationError};
`;

export const FormTitle = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 28px;
  }
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: static;
  }
`;
