import styled from 'styled-components';
import HeaderImage from './../../images/mobile/photos/header-image.png';

const ImageContainer = styled.div`
    background-image: url(${HeaderImage});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */

`

export {
    ImageContainer
}