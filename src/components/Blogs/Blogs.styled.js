import styled from 'styled-components';

const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 25px 20px;
`

const Heading = styled.h6`
    margin: 0;
    color: ${({ themes }) => themes.mediumGray};
    font-size: 18px;
`

const Link = styled.a`
    color: ${({ themes }) => themes.primaryColorBlue};
    font-size: 14px;
`


export {
    HeadingContainer,
    Heading,
    Link
}