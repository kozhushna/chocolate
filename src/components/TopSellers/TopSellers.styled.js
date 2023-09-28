import styled from '@emotion/styled';

export const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 20px;
  @media screen and (${props => props.theme.devices.tablet}) {
    flex-direction: row;
    gap: 16px;
    margin-bottom: 32px;
  }
`;

export const PictureOnlyDesktop = styled.picture`
  display: none;
  @media screen and (${props => props.theme.devices.desktop}) {
    display: block;
  }
`;

export const ImgStyled = styled.img`
  border-radius: 15px;
`;

export const TopSallersFooter = styled.div`
  text-align: center;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Description = styled.p`
  width: 306px;
  text-align: left;
  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-bottom: 20px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 407px;
  }
`;
