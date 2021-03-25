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
    width: 40%;
    padding: 15px 10px;
    border-radius: 10px;
    border: none;
    margin: 0;
    letter-spacing: 0.2px;
    font-size: 15px;

`

const SubscribeContainer = styled.div`
 background-image: url(${Builders});
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 236px;
    /* width: 100%; */
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