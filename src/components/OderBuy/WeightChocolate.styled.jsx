import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  row-gap: 8px;

  margin-bottom: 40px;
  @media screen and (${props => props.theme.devices.onlymobile}) {
    flex-direction: column;
  }
`;
export const Item = styled.li`
  display: flex;
  column-gap: 50px;
  padding: 8px 16px;

  row-gap: 14px;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 15px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 24px 20px 18px 20px;
    flex-direction: column;
  }
`;

export const Weight = styled.div`
  padding: 6px 16px;
  margin: auto auto;
  min-width: 50px;
  height: fit-content;
  background: ${props => props.theme.colors.mainBackground};
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  border: ${props => `1px solid ${props.theme.colors.light}`};
  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 8px 27px;
  }
`;
