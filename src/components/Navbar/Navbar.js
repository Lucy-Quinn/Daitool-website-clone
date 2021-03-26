import React, { useContext } from 'react';
import Hamburger from './../../images/mobile/icons/hamburger.svg';
import Logo from './../../images/mobile/DAITOOL_LOGO-WHITE.svg';
import Profile from './../../images/mobile/icons/navbar-profile-icon.svg';
import Trolley from './../../images/mobile/icons/navbar-trolley-icon.svg';
import SearchBar from './SearchBar/SearchBar';
import CartNotification from './../../images/mobile/icons/navbar-cart-notification.svg';
import { NavbarLeft, NavbarRight, NavigationContainerMobile, Notification, TrolleyCart, DesktopNavbar, MobileNavbar, NavigationLinksDesktop, Link, NavigationContainerDesktop, DesktopLogo, Language, ProfileIcon, ProfileIconContainer, TrolleyCartContainer, CartText, SigninText } from './Navbar.styled';
import { ThemeContext } from './../../contexts/ThemeContext';


const LINKS_LIST = [
    {
        name: 'SAFETY',
        id: '1'
    },
    {
        name: 'JANITORIAL',
        id: '2'
    },
    {
        name: 'TOOLS',
        id: '3'
    },
    {
        name: 'WOODWORKING',
        id: '4'
    },
    {
        name: 'GARDENING',
        id: '5'
    },
    {
        name: 'OFFICE SUPPLIES',
        id: '6'
    },
    {
        name: 'BLOG',
        id: '7'
    },
    {
        name: 'BRANDS',
        id: '8'
    },
    {
        name: 'ABOUT US',
        id: '9'
    }
]


const Navbar = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <>
            <MobileNavbar style={{ background: '#F07039' }}>
                <NavigationContainerMobile>
                    <NavbarLeft>
                        <img src={Hamburger} alt="hamburger icon" />
                        <img src={Logo} alt="Logo" />
                    </NavbarLeft>
                    <NavbarRight>
                        <img src={Profile} alt="Profile icon" />
                        <TrolleyCart src={Trolley} alt="Trolley icon" />
                        <Notification src={CartNotification} alt="Cart notification" />
                    </NavbarRight>
                </NavigationContainerMobile>
                <SearchBar />
            </MobileNavbar>

            <DesktopNavbar>
                <NavigationContainerDesktop themes={themes}>
                    <NavbarLeft>
                        <DesktopLogo src={Logo} alt="Logo" />
                    </NavbarLeft>
                    <SearchBar />
                    <NavbarRight>
                        <ProfileIconContainer>
                            <ProfileIcon src={Profile} alt="Profile icon" />
                            <SigninText themes={themes}>Sign in</SigninText>
                        </ProfileIconContainer>
                        <TrolleyCartContainer>
                            <TrolleyCart src={Trolley} alt="Trolley icon" />
                            <CartText themes={themes}>Cart</CartText>
                        </TrolleyCartContainer>
                        <Notification src={CartNotification} alt="Cart notification" />
                        <Language themes={themes}>En | USD  </Language>
                    </NavbarRight>
                </NavigationContainerDesktop>
                <NavigationLinksDesktop themes={themes}>
                    {LINKS_LIST.map((link) => {
                        return (
                            <Link themes={themes} key={link.id}>{link.name}</Link>
                        )
                    })}
                </NavigationLinksDesktop>
            </DesktopNavbar>
        </>
    );
}

export default Navbar;