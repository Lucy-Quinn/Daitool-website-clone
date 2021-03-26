import styled from 'styled-components';
import MostViewedImageMobile from './../../../images/mobile/photos/most-viewed-category.png';
import MostViewedImageDesktop from './../../../images/desktop/photos/most-viewed-category.png';

const ImageContainer = styled.div`
    background: linear-gradient(90.67deg, #F1F1F3 43.94%, rgba(240, 240, 242, 0) 99.4%), url(${MostViewedImageMobile});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover; 
    height: 215px;
    display: flex;
    padding: 15px 15px 15px 20px;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    @media(min-width: 1920px){
        background-image: linear-gradient(90.67deg, #F1F1F3 43.94%, rgba(240, 240, 242, 0) 99.4%), url(${MostViewedImageDesktop});
        height: 389px;
        display: block;
        border-radius: 30px;
    }
`

const MostViewedContainer = styled.div`
    @media(min-width: 1920px){
        padding: 50px 150px;
    }
`

const TopHeading = styled.h6`
    color: ${({ themes }) => themes.primaryColorOrange};
    font-weight: 800;
    margin: 18px 0 0 0;
    letter-spacing: 0.2px;
    @media(min-width: 1920px){
        margin: 85px 0 0 110px;
    }
`

const MiddleHeading = styled.h4`
    font-weight: 700;
    color: ${({ themes }) => themes.black};
    margin: 10px 0 0 0;
    @media(min-width: 1920px){
        font-size: 46px;
        margin: 10px 0 0 110px;
        width: 40%;
    }
`

const Description = styled.p`
    color: #3D3D3D;
    font-size: 15px;
    margin: 10px 0 0 0;
    @media(min-width: 1920px){
        font-size: 18px;
        margin: 10px 0 0 110px;
        width: 30%;

    }
`



export {
    ImageContainer,
    MostViewedContainer,
    TopHeading,
    MiddleHeading,
    Description
}