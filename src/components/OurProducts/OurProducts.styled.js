import styled from '@emotion/styled';
import { Container } from 'App.styled';

export const PaginationBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: 13px;
  margin-bottom: 32px;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 50px;
  }
  & .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    background-color: #e7e7e7;
    border-radius: 6.5px;
    transition: width 1200ms, background-color 1200ms;
  }
  & .swiper-pagination-bullet-active {
    width: 28px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const SliderContainer = styled(Container)`
  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 0 0 0 32px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 0 32px;
  }
`;
