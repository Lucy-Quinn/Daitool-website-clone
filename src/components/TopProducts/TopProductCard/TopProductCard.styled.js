import styled from 'styled-components';

const Image = styled.img`
    height: 163px;
    margin: 0 auto;
    display: block;
    @media(min-width: 1920px){
        height: auto;
    }

`

const ImageContainer = styled.div`
    @media(min-width: 1920px){
        width: 285px;
        height: 285px;
    }

`

export {
    Image,
    ImageContainer
}