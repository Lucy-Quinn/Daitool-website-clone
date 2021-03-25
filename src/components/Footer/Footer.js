import React, { useContext } from 'react';
import { ThemeContext } from './../../contexts/ThemeContext';
import { Text, FooterContainer } from './Footer.styled';

const Footer = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <FooterContainer themes={themes}>
            <Text themes={themes}>Daitool  -   © 2021 All Rights Reserved</Text>
        </FooterContainer>
    );
}

export default Footer;