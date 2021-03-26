import styled from 'styled-components';

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 25px 20px;
    @media(min-width: 1920px){
        margin: 0;
        margin-bottom: 42px;
    }
`

const Heading = styled.h6`
    margin: 0;
    color: ${({ themes }) => themes.mediumGray};
    font-size: 18px;
    @media(min-width: 1920px){
        color: ${({ themes }) => themes.black};
        font-size: 30px;
    }
`

const Link = styled.a`
    color: ${({ themes }) => themes.primaryColorBlue};
    font-size: 14px;
    @media(min-width: 1920px){
        font-size: 20px;
    }
`

const BlogsContainer = styled.div`
    @media(min-width: 1920px){
        padding-top: 70px;
        padding-bottom: 67px;
        padding-right: 6.8%;
        padding-left: 6.8%;

    }
`

export {
    HeadingContainer,
    Heading,
    Link,
    BlogsContainer
}