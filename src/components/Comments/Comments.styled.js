import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 32px;
  color: #111;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 50px;
    font-size: 24px;
    line-height: 1, 16;
    letter-spacing: -0.72px;
  }
`;

export const Accent = styled.span`
  color: #fd9222;
`;

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
    background-color: #fd9222;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 41px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid #fd9222;
  border-radius: 20.5px;
  @media screen and (${props => props.theme.devices.tablet}) {
    height: 50px;
    font-size: 18px;
    border-radius: 25px;
  }
`;
