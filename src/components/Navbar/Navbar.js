import React from 'react';
import Hamburger from './../../images/mobile/icons/hamburger.svg';
import Logo from './../../images/mobile/DAITOOL_LOGO-WHITE.svg';
import Profile from './../../images/mobile/icons/navbar-profile-icon.svg';
import Trolley from './../../images/mobile/icons/navbar-trolley-icon.svg';
import SearchBar from './SearchBar/SearchBar';


const Navbar = () => {
    return (
        <div style={{ background: '#F07039' }}>
            <img src={Hamburger} alt="hamburger icon" />
            <img src={Logo} alt="Logo" />
            <img src={Profile} alt="Profile icon" />
            <img src={Trolley} alt="Trolley icon" />
            <SearchBar />
        </div>
    );
}

export default Navbar;