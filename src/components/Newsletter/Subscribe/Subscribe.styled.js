import styled from 'styled-components';
import Builders from './../../../images/mobile/photos/builders.png';

const Discount = styled.h3`
    font-size: 32px;
    color: ${({ themes }) => themes.white};
    margin: 65px 0 10px 10px;
    font-weight: 700;
    letter-spacing: 0.1px;
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
`

const SubscribeContainer = styled.div`
 background-image: url(${Builders});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover; 
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
`

export {
    Discount,
    Button,
    SubscribeContainer
}