import styled from 'styled-components';

const Logo = styled.img`
    width: 160px;
    margin: 47px 0 16px 20px;
`

const Description = styled.p`
    font-size: 15px;
    color: ${({ themes }) => themes.blackButton};
    width: 306px;
    margin: 5px 0 40px 20px;
    letter-spacing: 0.2px;
`

export {
    Logo,
    Description,
}