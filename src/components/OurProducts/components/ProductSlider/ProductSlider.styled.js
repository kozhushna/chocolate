import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductSwiper = styled(Swiper)`
  margin: 0 auto 20px;

  & .swiper-wrapper {
    align-items: stretch;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 32px;
  }
`;

export const Item = styled(SwiperSlide)`
  height: auto;
  padding: 32px 0;
  border-radius: 15px;
  border: ${props => `1px solid ${props.theme.colors.light}`};
  background-color: ${props => props.theme.colors.white};
  list-style: none;
  text-align: center;
`;
