import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  & .swiper-wrapper {
    padding-top: 42px;
    align-items: stretch;
  }
  margin-bottom: 20px;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 32px;
  }
`;

export const StyledLi = styled(SwiperSlide)`
  position: relative;
  height: auto;
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
  font-size: 18px;
  line-height: 1.333333;
`;

export const UserComment = styled.p``;
