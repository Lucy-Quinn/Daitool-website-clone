import styled from 'styled-components';

const Form = styled.form`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px 0;
`

const Input = styled.input`
    width: 86%;
    padding: 15px 0;
    border-radius: 21px;
    border: none;
    margin-left: 20px;
`

const Image = styled.img`
    height: 19.43px;
    width: 19.43px;
    position: relative;
    right: 30px;
`

export {
    Form,
    Input,
    Image
}