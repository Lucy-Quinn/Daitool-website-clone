import React from 'react';
import HeaderImage from './../../images/mobile/photos/header-image.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={HeaderImage} alt="image of tools" />
            <h2>New Products</h2>
            <h3>Japan</h3>
            <a href="">Discover now</a>
        </div>
    );
}

export default Header;