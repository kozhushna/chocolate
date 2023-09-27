import styled from '@emotion/styled';

export const Elements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const VideoWraper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 614px;
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  padding: 20px, 14px;
  text-align: left;
  @media screen and (min-width: 768px) {
    width: 550px;
    padding: 32px;
  }
  @media screen and (min-width: 1200px) {
    width: 516px;
  }
`;

export const ListTitle = styled.h3`
  margin-bottom: 28px;
  color: #111;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 16px;
`;

export const Item = styled.li`
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  position: relative;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #111;
    position: absolute;
    left: -16px;
    top: 5px;
  }
`;

export const CoverImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-image: url('https://res.cloudinary.com/dt8h4kxqx/image/upload/v1695714737/chocolate/MobilCover.jpg');
  @media screen and (min-width: 768px) {
    width: 614px;
    height: 400px;
    background-image: url('https://res.cloudinary.com/dt8h4kxqx/image/upload/v1695714737/chocolate/Cover.jpg');
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
    height: 400px;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  color: #f5f4f4;
  fill: currentColor;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VideoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 20px) ;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
   position: static;
   transform: translate(0, 0);
   width: 100%;
  }
`;
