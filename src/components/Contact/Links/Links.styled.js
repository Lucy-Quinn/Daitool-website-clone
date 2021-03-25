import styled from 'styled-components';

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 5px;

`
const QuickLinksContainer = styled.div`
    width: 46%;
`
const CustomerAreaContainer = styled.div`
    width: 45%;

`

const Heading = styled.h6`
    color: ${({ themes }) => themes.black};
    margin: 50px 0 15px 0;
    font-size: 18px;
    font-weight: 700;
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
`

export {
    LinksContainer,
    QuickLinksContainer,
    Heading,
    CustomerAreaContainer,
    LinksList,
    Link
}