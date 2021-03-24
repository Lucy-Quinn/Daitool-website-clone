import styled from 'styled-components';

const SignupContainer = styled.div`
    background-color: ${({ themes }) => themes.primaryColorOrange};
`

const Image = styled.img`
    padding: 25px 0 15px 20px;
`

const Heading = styled.h5`
    font-size: 22px;
    color: ${({ themes }) => themes.white};
    margin: 0;
    padding: 0 0 0 20px;

`
const Description = styled.p`
    font-size: 16px;
    color: ${({ themes }) => themes.white};
    padding: 0 0 0 20px;
`
const Input = styled.input`
    width: 90%;
    padding: 20px 0 20px 10px;
    border-radius: 10px;
    border: none;
    margin-left: 14px;
    margin-bottom: 10px;
    &::placeholder{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.28);
    }
`

const Button = styled.button`
    color: ${({ themes }) => themes.white};
    background-color: ${({ themes }) => themes.blackButton};
    width: 40%;
    border-radius: 10px;
    border: none;
    letter-spacing: 0.2px;
    font-size: 15px;
    padding: 15px 5px;
    margin: 10px 20px 23px 0;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export {
    SignupContainer,
    Image,
    Heading,
    Description,
    Input,
    Button,
    ButtonContainer
}