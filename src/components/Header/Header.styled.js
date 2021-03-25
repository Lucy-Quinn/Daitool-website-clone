import styled from 'styled-components';
import HeaderImage from './../../images/mobile/photos/header-image.png';

const ImageContainer = styled.div`
    background-image: url(${HeaderImage});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 421px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`

const Heading = styled.h2`
    margin: 0 20px 0 0;
    color: ${({ themes }) => themes.white};
    font-size: 40px;
    font-weight: 700;
`
const Country = styled.h3`
    margin: 0 20px 0 0;
    color: ${({ themes }) => themes.white};
    font-size: 36px;
    font-weight: 200;
`

const Link = styled.a`
    margin: 10px 20px 50px 0;
    color: ${({ themes }) => themes.primaryColorOrange};
    font-size: 18px;
    font-weight: 600;
`

export {
    ImageContainer,
    Heading,
    Country,
    Link
}