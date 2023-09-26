import styled from '@emotion/styled';

export const ItemStyles = styled.div`
  width: 270px;
  height: 270px;
  padding: 28px;
  position: relative;
  border: 1px solid #fd9222;
  border-radius: 15%;

  &:first-of-type {
    background-color: #fd9222;
    color: #fff;
  }

  &:nth-of-type(3) {
    background-color: #1e1823;
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 20px;
`;

export const ImageContainerText = styled.p`
  margin-top: 36px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export const Info = styled.div`
  background-color: white;
  padding: 20px;
  color: black;
`;

export const CardOverlay = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.isHovered ? '100%' : '0')};
  transform: translateY(${props => (props.isHovered ? '0' : '100%')});
  overflow: hidden;
  z-index: 1;
  border: 1px solid black;
  border: ${props => (props.isHovered ? '1px solid black' : 'none')};
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTitle = styled.p`
  color: #111;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.54px;
  text-align: left;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoLabelName = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  border: 2px solid #fd9222;
  border-radius: 35px;
  background-color: #fd9222;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 8px;
  margin-right: 6px;
`;

export const InfoLabelBenefits = styled.p`
  color: #111;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  border: 1px solid #fd9222;
  border-radius: 35px;
  padding: 6px 16px;
  margin-top: 8px;
`;

export const InfoText = styled.p`
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: left;
  margin-top: 14px;
`;
