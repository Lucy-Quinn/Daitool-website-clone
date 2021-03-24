import styled from 'styled-components';

const ImageContainer = styled.div`
    background-image: linear-gradient(to bottom, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 124%), url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 120px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
    border-radius: 10px;
`

const ImageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TopHeading = styled.h5`
    color: ${({ themes }) => themes.white};
    font-size: 22px;
    font-weight: 700;
    margin: 10% 0 0 0;
    line-height: 32px;

`

const MiddleHeading = styled.h6`
    margin: 0;
    color: #ECECEC;
    font-weight: 400;
`


export {
    ImageContainer,
    ImageContent,
    TopHeading,
    MiddleHeading
}