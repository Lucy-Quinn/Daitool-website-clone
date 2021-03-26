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
const ContactTextGroup = styled.div`
    display: none;
    @media(min-width: 1920px){
        display: flex;
        flex-direction: column;
    }
`

const Heading = styled.h5`
        font-size: 20px;
        font-weight: 700;
        @media(min-width: 1920px){
            font-size: 20px;
            margin: 50px 0 30px 0;
        }
`

const Description = styled.h6`
    font-size: 16px;
    font-weight: 400;
`

const ContactDetailsGroup = styled.div`
    @media(min-width: 1920px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 400px;
    }
    
`


const ContactNumberGroup = styled.div`
    @media(min-width: 1920px){
        display: flex;
        flex-direction: column;
    }
`


export {
    Questions,
    Telephone,
    Button,
    ContactDetailsContainer,
    ContactTextGroup,
    Heading,
    Description,
    ContactDetailsGroup,
    ContactNumberGroup
}