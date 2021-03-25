import styled from 'styled-components';

const FooterContainer = styled.div`
    border-top: 1px solid ${({ themes }) => themes.lightColorGray};
`

const Text = styled.h6`
    color: ${({ themes }) => themes.footerColor};
    font-weight: 400;
    margin: 20px 0 0 20px;
    padding: 0 0 20px 0;
    letter-spacing: 0.2px;
`

export {
    FooterContainer,
    Text
}