import styled from '@emotion/styled';
import { theme } from 'styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100vw - 48px);
  background: ${theme.colors.mainBackground};
  transform: translate(-50%, -50%);
  border-radius: 15px;
  /* padding: 32px 24px 32px 24px; */

  @media screen and (${theme.devices.mobile}) {
    width: 311px;
  }

  @media screen and (${theme.devices.tablet}) {
    /* width: 538px;
    padding: 32px 24px 32px 24px; */
  }
`;
