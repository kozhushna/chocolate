import { Title, Accent, Section, ContactWrapper, Wrapper } from './Footer.styled';
import { Navigation } from "./components/Navigation/Navigation";
import { SocialIcon } from './components/SocialIcon/SocialIcon';
import { Contacts } from './components/Contacts/Contacts';
import { Container } from 'App.styled';

export const Footer = () =>{

    return(
        <Section>
            <Container>
                <Wrapper>
                    <Title><Accent>Chocolate</Accent> a delicious <br/>cure for a bad day</Title>
                    <ContactWrapper>
                        <Contacts />
                        <SocialIcon />
                    </ContactWrapper>
                </Wrapper>  
                <Navigation />
            </Container>
        </Section>
   
    )
        
}