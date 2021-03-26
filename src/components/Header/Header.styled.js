import styled from 'styled-components';
import HeaderImageMobile from './../../images/mobile/photos/header-image.png';
import HeaderImageDesktop from './../../images/desktop/photos/header-image.png';

const ImageContainer = styled.div`
    background-image: url(${HeaderImageMobile});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 421px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    @media(min-width: 1920px){
        background-image: url(${HeaderImageDesktop});
        height: 550px;
        padding: 0 282px 100px 0;
    }
`

const Heading = styled.h2`
    margin: 0 20px 0 0;
    color: ${({ themes }) => themes.white};
    font-size: 40px;
    font-weight: 700;
    @media(min-width: 1440px){
        font-weight: 800;
        font-size: 68px;
    }
`
const Country = styled.h3`
    margin: 0 20px 0 0;
    color: ${({ themes }) => themes.white};
    font-size: 36px;
    font-weight: 200;
    @media(min-width: 1440px){
        font-weight: 200;
        font-size: 68px;
    }
`

const Link = styled.a`
    margin: 10px 20px 50px 0;
    color: ${({ themes }) => themes.primaryColorOrange};
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
    @media(min-width: 1440px){
        font-weight: 600;
        font-size: 18px;
    }
`

export {
    ImageContainer,
    Heading,
    Country,
    Link
}