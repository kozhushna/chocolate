import { ContactBox, ContactTitle, Contact, ContactLink } from "./Contacts.styled"

export const Contacts = () => {
    return(
        <ContactBox>
            <ContactTitle> Contact us</ContactTitle>
            <Contact>
                <ContactLink href="tel:+380684439426">+380 (68) 443-94-26</ContactLink>
                <ContactLink href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</ContactLink>
            </Contact>
        </ContactBox>
    )
}

