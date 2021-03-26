import styled from 'styled-components';

const FooterContainer = styled.div`
    @media(min-width: 1920px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid ${({ themes }) => themes.lightColorGray};
        flex-direction: row-reverse;
        margin: 0 6.8%;

    }
`

const Text = styled.h6`
    color: ${({ themes }) => themes.footerColor};
    font-weight: 400;
    margin: 20px 0 0 20px;
    padding: 0 0 20px 0;
`

export {
    FooterContainer,
    Text
}