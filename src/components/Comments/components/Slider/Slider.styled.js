import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  & .swiper-wrapper {
    padding-top: 42px;
  }
`;

export const StyledLi = styled(SwiperSlide)`
  position: relative;
  padding-top: 56px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 26px;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: -42px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
`;

export const UserName = styled.h3`
  margin-bottom: 24px;
`;

export const UserComment = styled.p``;
