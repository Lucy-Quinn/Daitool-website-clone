import styled from 'styled-components';

const CarouselMobile = styled.div`
    @media(min-width: 1920px){
        display: none;
    }
`
const CardsContainerDesktop = styled.div`
    display: none;
    @media(min-width: 1920px){
        display: flex;
        justify-content: space-between;
        min-width: 527px;
    }
`
const BlogTextContainer = styled.div`
    @media(min-width: 1920px){
        margin-top: 50px;
        font-weight: bold;
        font-size: 24px;
    }
`

const BlogItem = styled.div`
    @media(min-width: 1920px){
        width: 527px;
    }
`

const BlogImg = styled.img`
    @media(min-width: 1920px){
        width: 100%;  
    }
`

const BlogTitle = styled.p`
    @media(min-width: 1920px){
        font-size: 24px;
    }
`

const BlogExcerpt = styled.h6`
    @media(min-width: 1920px){
        font-size: 18px;
    }
`

export {
    CarouselMobile,
    CardsContainerDesktop,
    BlogTextContainer,
    BlogItem,
    BlogImg,
    BlogExcerpt,
    BlogTitle
}