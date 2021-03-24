import styled from 'styled-components';
import MostViewedImage from './../../../images/mobile/photos/most-viewed-category.png';

const ImageContainer = styled.div`
    background: linear-gradient(90.67deg, #F1F1F3 43.94%, rgba(240, 240, 242, 0) 99.4%), url(${MostViewedImage});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 215px;
    display: flex;
    padding: 15px 15px 15px 20px;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
`

const MostViewedContainer = styled.div`
    margin: 20px;
`

const TopHeading = styled.h6`
    color: ${({ themes }) => themes.primaryColorOrange};
    font-weight: 800;
    margin: 18px 0 0 0;
`

const MiddleHeading = styled.h4`
    font-weight: 700;
    color: #000000;
    margin: 10px 0 0 0;

`

const Description = styled.p`
    color: #3D3D3D;
    font-size: 15px;
    margin: 10px 0 0 0;

`



export {
    ImageContainer,
    MostViewedContainer,
    TopHeading,
    MiddleHeading,
    Description
}