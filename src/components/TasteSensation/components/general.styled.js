import styled from '@emotion/styled';

export const ItemStyles = styled.div`
  width: 335px;
  height: 270px;
  padding: 28px;
  position: relative;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 15%;
  margin-bottom: 32px;
  margin-right: 19px;

  &:first-of-type {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }

  &:nth-of-type(3) {
    background-color: #1e1823;
    color: ${props => props.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: 333px;
    height: 270px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  margin: 0 auto;
`;

export const ImageContainerText = styled.p`
  margin-top: 36px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export const Info = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  color: black;
`;

export const CardOverlay = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.isHovered ? '100%' : '0')};
  overflow: hidden;
  z-index: 1;
  border: 1px solid black;
  border: ${props => (props.isHovered ? '1px solid #fd9222' : 'none')};
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const InfoTitle = styled.p`
  color: ${props => props.theme.colors.primaryText};
  font-size: 18px;
  letter-spacing: -0.54px;
  text-align: left;
`;

export const InfoText = styled.p`
  color: ${props => props.theme.colors.primaryText};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: left;
  margin-top: 14px;
  overflow: auto;
`;
