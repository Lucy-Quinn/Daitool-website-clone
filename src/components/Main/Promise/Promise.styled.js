import styled from 'styled-components';

const Heading = styled.h6`
    color: ${({ themes }) => themes.mediumGray};
    margin: 32px auto 20px 20px;
    font-size: 18px;
    font-weight: 600;
    @media(min-width: 1920px){
        display: none;
    }
`

const Description = styled.h6`
    font-size: 14px;
    color: ${({ themes }) => themes.mediumGray};
    margin: 5px 0 0 0;
    font-weight: 400;
    @media(min-width: 1920px){
        font-size: 18px;
    }
`

const PromiseContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media(min-width: 1920px){
        padding: 150px 285px 80px;
    }
`

const DaitoolPromise = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-bottom: 5px;
    @media(min-width: 1920px){
        position: relative;
        border: 1px solid #E7E7E7;
        max-width: 222px;
        padding: 50px 0 27px 0;
        border-radius: 14px;
    }
`

const Image = styled.img`
    margin: 0;
    width: 54%;
    @media(min-width: 1920px){
        position: absolute;
        width: 75px;
        top: -40px;
        background-color: white;
    }
`

const PromiseName = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${({ themes }) => themes.black};
    font-weight: 700;
    @media(min-width: 1920px){
        font-size: 24px;
    }
`

export {
    Heading,
    Description,
    PromiseContainer,
    DaitoolPromise,
    Image,
    PromiseName
}