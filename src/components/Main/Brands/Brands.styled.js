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
`

const Image = styled.img`
    margin: 0 0 30px 0;
`

const ImageContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* margin: 0 auto; */
`

export {
    Heading,
    BrandContainer,
    Image,
    ImageContainer
}