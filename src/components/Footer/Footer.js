import React, { useContext } from 'react';
import { ThemeContext } from './../../contexts/ThemeContext';
import { Text, FooterContainer } from './Footer.styled';
import Payment from './Payment/Payment';

const Footer = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <FooterContainer themes={themes}>
            <Payment />
            <Text themes={themes}>Daitool  -   © 2021 All Rights Reserved</Text>
        </FooterContainer>
    );
}

export default Footer;