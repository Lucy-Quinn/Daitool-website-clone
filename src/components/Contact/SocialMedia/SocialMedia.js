import React from 'react';
import { SocialMediaContainer, Image } from './SocialMedia.styled';
import Youtube from './../../../images/mobile/icons/social-youtube.svg';
import Linkedin from './../../../images/mobile/icons/social-linkedin.svg';
import Twitter from './../../../images/mobile/icons/social-twitter.svg';
import Facebook from './../../../images/mobile/icons/social-facebook.svg';
import Instagram from './../../../images/mobile/icons/social-instagram.svg';

const SOCIAL_MEDIA_DATA = [
    { icon: { image: Youtube } },
    { icon: { image: Linkedin } },
    { icon: { image: Twitter } },
    { icon: { image: Facebook } },
    { icon: { image: Instagram } },
]

const SocialMedia = () => {
    return (
        <div>
            <SocialMediaContainer>
                {SOCIAL_MEDIA_DATA.map((social, i) => {
                    return (
                        <Image src={social.icon.image} alt="" key={i} />
                    )
                })}
            </SocialMediaContainer>
        </div>
    );
}

export default SocialMedia;