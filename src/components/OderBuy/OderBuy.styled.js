import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { theme } from 'styles';

export const StyledDiv = styled(ModalContent)`
  @media screen and (${theme.devices.tablet}) {
    width: 609px;
  }
`;
