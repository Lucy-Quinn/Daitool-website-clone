import styled from 'styled-components';

const SignupContainer = styled.div`
    background-color: ${({ themes }) => themes.primaryColorOrange};
    @media(min-width: 1920px){
        padding: 103px 9% 99px 8%;
        display: flex;
    }
`

const Image = styled.img`
    padding: 25px 0 15px 20px;
    @media(min-width: 1920px){
        width: 116px;
        height: 102px;
        padding: 0;
        margin-right: 4.5%;
    }
`

const Heading = styled.h5`
    font-size: 22px;
    color: ${({ themes }) => themes.white};
    margin: 0 0 10px 0;
    padding: 0 0 0 20px;
    font-weight: 700;
    letter-spacing: 0.2px;
    @media(min-width: 1920px){
        font-size: 30px;
        margin-bottom: 25px;
    }
`
const Description = styled.p`
    font-size: 16px;
    color: ${({ themes }) => themes.white};
    padding: 0 0 0 20px;
    font-weight: 300;
    width: 334px;
    @media(min-width: 1920px){
        font-size: 18px;
        margin-right: 6.7%;
        max-width: 663px;
        width: inherit;
    }
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
    @media(min-width: 1920px){
        width: 653px;
        height: 100%;
        border-radius: 12px;
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
    @media(min-width: 1920px){
        font-size: 18px;
        width: 180px;
        height: 61px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media(min-width: 1920px){
        position: absolute;
        right: 233px;
        padding-top: 5px;
    }
`

const SignupTextGroup = styled.div`
    @media(min-width: 1920px){
        display: flex;
        flex-direction: column;
    }
`

const InputContainer = styled.div`
    @media(min-width: 1920px){
        display: flex;
        align-items: center;
        padding: 25px 0;
    }
`


export {
    SignupContainer,
    Image,
    Heading,
    Description,
    Input,
    Button,
    ButtonContainer,
    SignupTextGroup,
    InputContainer
}