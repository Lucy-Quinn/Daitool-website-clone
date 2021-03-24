import React, { useContext } from 'react';
import LogoImage from './../../images/mobile/DAITOOL_LOGO-BLACK.svg';
import { Logo, Image, Description, SocialMediaContainer } from './Contact.styled';
import { ThemeContext } from './../../contexts/ThemeContext';
import Youtube from './../../images/mobile/icons/social-youtube.svg';
import Linkedin from './../../images/mobile/icons/social-linkedin.svg';
import Twitter from './../../images/mobile/icons/social-twitter.svg';
import Facebook from './../../images/mobile/icons/social-facebook.svg';
import Instagram from './../../images/mobile/icons/social-instagram.svg';
import Links from './Links/Links';


const SOCIAL_MEDIA_DATA = [
    { icon: { image: Youtube } },
    { icon: { image: Linkedin } },
    { icon: { image: Twitter } },
    { icon: { image: Facebook } },
    { icon: { image: Instagram } },
]

const Contact = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <div>
            <Logo src={LogoImage} alt="logo" />
            <Description themes={themes}>Daitool is the global reference site for high-quality, Japanese brand, industrial tools and supplies. We empower clients to build better, anywhere in the world.</Description>
            <SocialMediaContainer>
                {SOCIAL_MEDIA_DATA.map((social, i) => {
                    return (
                        <Image src={social.icon.image} alt="" key={i} />
                    )
                })}
            </SocialMediaContainer>
            <Links />
        </div>
    );
}

export default Contact;