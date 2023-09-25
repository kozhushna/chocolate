import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductSwiper = styled(Swiper)`
  & .swiper-wrapper {
    align-items: stretch;
  }

  margin-bottom: 20px;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 32px;
  }
`;

export const Item = styled(SwiperSlide)`
  height: 364px;
  padding: 32px 52px 32px 53px;
  border-radius: 15px;
  border: ${props => `1px solid ${props.theme.colors.light}`};
  background-color: ${props => props.theme.colors.white};
  list-style: none;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 32px 20px;
  }
`;
