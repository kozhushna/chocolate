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
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${props => props.theme.devices.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Description = styled.p`
  text-align: left;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: 306px;
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    margin-right: 29px;
    margin-bottom: 20px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 407px;
  }
`;
