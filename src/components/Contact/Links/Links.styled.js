import styled from 'styled-components';

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5px;
    @media(min-width: 1920px){
        margin-right: 6.25%;
        min-width: 580px;
        display: flex;
    }

`
const QuickLinksContainer = styled.div`
    width: 46%;
    @media(min-width:1920px) {
        margin-right: 6.25%;
        display: flex;
        flex-direction: column;
    }
   
`
const CustomerAreaContainer = styled.div`
    width: 45%;

    @media(min-width: 1920px){
        width: unset;
    }

`

const Heading = styled.h6`
    color: ${({ themes }) => themes.black};
    margin: 50px 0 15px 0;
    font-size: 18px;
    font-weight: 700;
    @media(min-width: 1920px){
        font-size: 20px;
        margin-bottom: 30px;
    }
`


const LinksList = styled.div`
    display: flex;
    flex-direction: column;

`

const Link = styled.a`
    color: ${({ themes }) => themes.darkGray};
    margin-bottom: 10px;
    font-weight: 400;
    text-decoration: none;
    @media(mind-width: 1920px){
        font-size: 18px;
    }
`

export {
    LinksContainer,
    QuickLinksContainer,
    Heading,
    CustomerAreaContainer,
    LinksList,
    Link
}