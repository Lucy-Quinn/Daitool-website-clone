import React, { useContext } from 'react';
import LogoImage from './../../images/mobile/DAITOOL_LOGO-BLACK.svg';
import { Logo, Description } from './Contact.styled';
import { ThemeContext } from './../../contexts/ThemeContext';
import Links from './Links/Links';
import ContactDetails from './ContactDetails/ContactDetails';
import SocialMedia from './SocialMedia/SocialMedia';
import Payment from './Payment/Payment';


const Contact = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <div>
            <Logo src={LogoImage} alt="logo" />
            <Description themes={themes}>Daitool is the global reference site for high-quality, Japanese brand, industrial tools and supplies. We empower clients to build better, anywhere in the world.</Description>
            <SocialMedia />
            <Links />
            <ContactDetails />
            <Payment />
        </div>
    );
}

export default Contact;