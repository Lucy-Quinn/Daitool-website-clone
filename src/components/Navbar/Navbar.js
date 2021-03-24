import React from 'react';
import Hamburger from './../../images/mobile/icons/hamburger.svg';
import Logo from './../../images/mobile/DAITOOL_LOGO-WHITE.svg';
import Profile from './../../images/mobile/icons/navbar-profile-icon.svg';
import Trolley from './../../images/mobile/icons/navbar-trolley-icon.svg';
import SearchBar from './SearchBar/SearchBar';
import CartNotification from './../../images/mobile/icons/navbar-cart-notification.svg';
import { NavbarLeft, NavbarRight, NavigationContainer, Notification, TrolleyCart } from './Navbar.styled';


const Navbar = () => {
    return (
        <div style={{ background: '#F07039' }}>
            <NavigationContainer>
                <NavbarLeft>
                    <img src={Hamburger} alt="hamburger icon" />
                    <img src={Logo} alt="Logo" />
                </NavbarLeft>
                <NavbarRight>
                    <img src={Profile} alt="Profile icon" />
                    <TrolleyCart src={Trolley} alt="Trolley icon" />
                    <Notification src={CartNotification} alt="Cart notification" />
                </NavbarRight>
            </NavigationContainer>
            <SearchBar />
        </div>
    );
}

export default Navbar;