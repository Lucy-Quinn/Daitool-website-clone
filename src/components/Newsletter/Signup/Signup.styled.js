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
    margin: 0 0 10px 0;
    padding: 0 0 0 20px;
    font-weight: 700;
    letter-spacing: 0.2px;
`
const Description = styled.p`
    font-size: 16px;
    color: ${({ themes }) => themes.white};
    padding: 0 0 0 20px;
    font-weight: 300;
    width: 334px;
`

const Input = styled.input`
    width: 334px;
    height: 56px;
    padding: 20px 0 20px 10px;
    border-radius: 10px;
    border: none;
    margin: 0 0 10px 21px;
    &::placeholder{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.28);
        font-weight: 400;
    }
`

const Button = styled.button`
    color: ${({ themes }) => themes.white};
    background-color: ${({ themes }) => themes.blackButton};
    width: 132px;
    height: 40px;
    border-radius: 10px;
    border: none;
    letter-spacing: 0.2px;
    font-size: 15px;
    padding: 15px 5px;
    margin: 10px 20px 23px 0;
    display: flex;
    justify-content: center;
    align-items: center;
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