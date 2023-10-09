import styled from '@emotion/styled';

export const ItemImg = styled.img`
  border-radius: 29px;
  border: 1px solid ${props => props.theme.colors.lightBorder};
  width: 62px;
  height: 62px;
  padding: 10px;
  position: relative;
`;

export const ItemTitle = styled.h5`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  text-align: left;
  font-weight: 600;
  margin-top: 22px;
  padding-right: 50px;
`;

export const ItemText = styled.p`
  color: ${props => props.theme.colors.lightText};
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  margin-top: 18px;
  padding-right: 19px;
`;

export const ItemCollectionSeparator = styled.div`
  &::before {
    content: '';
    width: 1px;
    height: 124px;
    position: absolute;
    top: 63px;
    right: 10px;
    background-color: ${props => props.theme.colors.lightText};
    display: none;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    &::before {
      display: ${props => (props.showSeparator ? 'block' : 'none')};
    }
  }
`;

export const CollectionList = styled.ul`
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(308px, 1fr));
  gap: 20px;

  @media screen and (${props => props.theme.devices.onlymobile}) {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 50px 32px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 50px;
  }
`;

export const CollectionListItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-left: 7px;
`;
