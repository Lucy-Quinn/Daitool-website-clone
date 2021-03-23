import styled from 'styled-components';
import HeaderImage from './../../images/mobile/photos/header-image.png';

const ImageContainer = styled.div`
    background-image: url(${HeaderImage});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 421px;
    width: 100%;
`

const Heading = styled.h2`
    margin: 0;
    color: ${({ themes }) => themes.white};
    font-size: 40px;
    position: relative;
    top: 58%;
    left: 24%;
    font-weight: 700;
`
const Country = styled.h3`
    color: ${({ themes }) => themes.white};
    font-size: 36px;
    position: relative;
    top: 49%;
    left: 0 auto;
    left: 70%;
    font-weight: 200;
`

const Link = styled.a`
    color: ${({ themes }) => themes.primaryColorOrange};
    font-size: 18px;
    position: relative;
    top: 42%;
    left: 65%;
    font-weight: 600;
`

export {
    ImageContainer,
    Heading,
    Country,
    Link
}