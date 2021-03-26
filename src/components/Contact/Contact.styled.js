import styled from 'styled-components';

const Logo = styled.img`
    width: 160px;
    margin: 47px 0 16px 20px;
`

const Description = styled.p`
    font-size: 15px;
    color: ${({ themes }) => themes.blackButton};
    width: 306px;
    margin: 5px 0 40px 20px;
    letter-spacing: 0.2px;
    @media(min-width: 1920px){
        font-size: 16px;
    }
`

const LogoContainer = styled.div`
    @media(min-width: 1920px){
        display: flex;
        flex-direction: column;
        margin-right: 6.8%;
    }
`

const ContactContainer = styled.div`
    @media(min-width: 1920px){
        display: flex;
        padding: 98px 9% 160px 8%;
    }

`


export {
    Logo,
    Description,
    LogoContainer,
    ContactContainer,
}