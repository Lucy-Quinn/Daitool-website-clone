import styled from 'styled-components';

const Questions = styled.h6`
    color: ${({ themes }) => themes.black};
    font-weight: 400;
    margin: 30px 0 10px 0;
`
const Telephone = styled.h6`
    color: #FF7020;
    font-weight: 400;
    margin: 0 0 25px 0;

`
const Button = styled.button`
    border: 1px solid ${({ themes }) => themes.primaryColorBlue};
    background-color: ${({ themes }) => themes.white};
    color: ${({ themes }) => themes.primaryColorBlue};
    font-size: 15px;
    border-radius: 10px;
    padding: 20px 41px;
    font-weight: 400;
    letter-spacing: 0.05em;
    width: 159.62px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactDetailsContainer = styled.div`
    margin-left: 20px;
`


export {
    Questions,
    Telephone,
    Button,
    ContactDetailsContainer
}