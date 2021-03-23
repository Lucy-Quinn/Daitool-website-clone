import React, { useContext } from 'react';
import './Header.css';
import { ImageContainer, Heading, Country, Link } from './Header.styled';
import { ThemeContext } from './../../contexts/ThemeContext';

const Header = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            <ImageContainer>
                <Heading themes={themes}>New Products</Heading>
                <Country themes={themes}>Japan</Country>
                <Link themes={themes} href="#">Discover now</Link>
            </ImageContainer>
        </div>
    );
}

export default Header;