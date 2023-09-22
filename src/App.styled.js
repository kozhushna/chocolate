import styled from '@emotion/styled';
import { devices } from 'styles';

export const Container = styled.div`
  padding: 0 20px;
  @media screen and (${devices.mobile}) {
    width: ${devices.mobile};
  }

  @media screen and (${devices.tablet}) {
    padding: 0 32px;
    width: ${devices.tablet};
  }

  @media screen and (${devices.desktop}) {
    width: ${devices.desktop};
  }
`;
