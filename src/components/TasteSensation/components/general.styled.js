import styled from '@emotion/styled';

export const ItemStyles = styled.div`
  width: 335px;
  height: 270px;
  padding: 28px;
  position: relative;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 15px;
  /* margin-bottom: 32px;
  margin-right: 19px; */

  &:hover {
    .info_title {
      opacity: 1;
      height: 100%;
    }

    .image_container {
      opacity: 0;
    }
  }

  &:first-of-type {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }

  &:nth-of-type(3) {
    background-color: #1e1823;
    color: ${props => props.theme.colors.white};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 336px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 270px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  transition: opacity ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};
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
  height: 0;
  /* height: ${props => (props.isHovered ? '100%' : '0')}; */
  opacity: 0;
  overflow: hidden;
  z-index: 1;
  /* border: 1px solid black; */
  /* border: ${props => (props.isHovered ? '1px solid #fd9222' : 'none')}; */
  border-radius: 15px;

  transition: opacity ${props => props.theme.baseTransition};
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (${props => props.theme.devices.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 18px;
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
