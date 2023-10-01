import styled from '@emotion/styled';

export const Section = styled.section`
    background-color: ${props => props.theme.colors.darkBackground};
    padding: 32px 0;

    @media screen and (${props => props.theme.devices.tablet}){
      padding: 50px 0;
    }
`;

export const Wrapper = styled.div`
    
    border-bottom: 1px solid ${props => props.theme.colors.lightBorder};

    @media screen and (${props => props.theme.devices.tablet}){
        display: flex;
        flex-direction: row;
        padding-bottom: 50px;
        gap: 124px;
    }
    @media screen and (${props => props.theme.devices.desktop}){
        padding-bottom: 62px;
        gap: 543px;
    }
`;

export const Title = styled.h2`
  color:  ${props => props.theme.colors.white};
  text-align: start;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  max-width: 300px;
  letter-spacing: -0.6px;
  
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 300px;
  }
`;

export const Accent = styled.span`
  color:  ${props => props.theme.colors.accent};
`;

export const ContactWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (${props => props.theme.devices.tablet}){
    gap: 50px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media screen and (${props => props.theme.devices.desktop}){
    gap: 63px;
}
`;

