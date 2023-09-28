import { ContactBox, ContactTitle, Contact, ContactLink } from "./Contacts.styled"

export const Contacts = () => {
    return(
        <ContactBox>
            <ContactTitle> Contact us</ContactTitle>
            <Contact>
                <ContactLink href="tel:+380884439426">+380 (88) 443-94-26</ContactLink>
                <ContactLink href="mailto:chocs1048@gmail.com">chocs1048@gmail.com</ContactLink>
            </Contact>
        </ContactBox>
    )
}

