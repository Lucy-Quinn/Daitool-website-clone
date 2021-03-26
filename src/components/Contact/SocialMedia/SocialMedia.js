import React from 'react';
import { SocialMediaContainer, Image } from './SocialMedia.styled';
import Youtube from './../../../images/mobile/icons/social-youtube.svg';
import Linkedin from './../../../images/mobile/icons/social-linkedin.svg';
import Twitter from './../../../images/mobile/icons/social-twitter.svg';
import Facebook from './../../../images/mobile/icons/social-facebook.svg';
import Instagram from './../../../images/mobile/icons/social-instagram.svg';

const SOCIAL_MEDIA_DATA = [
    {
        icon:
            { image: Youtube },
        id: 1
    },
    {
        icon:
            { image: Linkedin },
        id: 2
    },
    {
        icon:
            { image: Twitter },
        id: 3
    },
    {
        icon:
            { image: Facebook },
        id: 4
    },
    {
        icon:
            { image: Instagram },
        id: 5
    },
]

const SocialMedia = () => {
    return (
        <div>
            <SocialMediaContainer>
                {SOCIAL_MEDIA_DATA.map((social) => {
                    return (
                        <Image src={social.icon.image} alt="" key={social.id} />
                    )
                })}
            </SocialMediaContainer>
        </div>
    );
}

export default SocialMedia;