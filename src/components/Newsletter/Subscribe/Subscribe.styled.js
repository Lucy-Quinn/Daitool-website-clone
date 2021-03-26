import styled from 'styled-components';
import BuildersMobile from './../../../images/mobile/photos/builders.png';
import BuildersDesktop from './../../../images/desktop/photos/builders.png';

const SubscribeContainer = styled.div`
    background-image: url(${BuildersMobile});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover; 
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    @media(min-width: 1920px){
        background-image: url(${BuildersDesktop});
        height: 442px;
        padding: 110px 0 147px 15%;
    }
`

const Discount = styled.h3`
    font-size: 32px;
    color: ${({ themes }) => themes.white};
    margin: 65px 0 10px 10px;
    font-weight: 700;
    letter-spacing: 0.1px;
    @media(min-width: 1920px){
        font-size: 80px;
        margin: 0 0 14px 0;
    }
`

const Button = styled.button`
    width: 144px;
    height: 42px;
    padding: 15px 10px;
    border-radius: 10px;
    border: none;
    margin: 0;
    letter-spacing: 0.2px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    @media(min-width: 1920px){
        font-size: 18px;
        width: 180px;
        height: 61px;
        color: ${({ themes }) => themes.white};
        background-color: ${({ themes }) => themes.primaryColorOrange};
    }
`

export {
    Discount,
    Button,
    SubscribeContainer
}