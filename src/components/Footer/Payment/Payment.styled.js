import styled from 'styled-components';

const PaymentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0 25px 4px;
    border-bottom: 1px solid ${({ themes }) => themes.lightColorGray};
    padding-bottom: 20px;
    @media(min-width: 1920px){
        border: none;
    }
`

export {
    PaymentContainer
}