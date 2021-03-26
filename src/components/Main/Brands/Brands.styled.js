import styled from 'styled-components';

const Heading = styled.h6`
    color: ${({ themes }) => themes.mediumGray};
    margin: 32px auto 32px 20px;
    font-size: 18px;
    font-weight: 600;
    @media(min-width: 1920px){
        display: none;
    }
`

const BrandContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 77%;
    margin: 0 auto;
    @media(min-width: 1920px){
        margin: 0;
        width: inherit;
    }
`

const Image = styled.img`
    margin: 0 0 30px 0;
    @media(min-width: 1920px){
        margin: 0;
    }
`

const ImageContainer = styled.div`
  
`

const ArrowLeft = styled.img`
    display: none;
    @media(min-width: 1920px){
        display: block;
    }
`

const ArrowRight = styled.img`
  display: none;
    @media(min-width: 1920px){
        display: block;
    }`

export {
    Heading,
    BrandContainer,
    Image,
    ImageContainer,
    ArrowLeft,
    ArrowRight
}