import styled from 'styled-components';

const NavbarLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 51%;
    @media(min-width: 1920px){
        width: inherit;
    }
`

const NavbarRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 29%;
    margin-right: -4%;
    @media(min-width: 1920px){
        width: inherit;
        margin: 0;
        margin-right: 2.3%;

    }
`


const NavigationContainerMobile = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 36px 0 21px 0;
    @media(min-width: 1920px){
        justify-content: space-between;
        margin-bottom: 17px;

    }
`

const Notification = styled.img`
    position: relative;
    right: 9px;
    bottom: 13px;
    @media(min-width: 1920px){
    bottom: 26px;
    right: 0;
    width: 35px;
    height: 35px;

        }

`

const TrolleyCart = styled.img`
        margin-left: 10px;
        @media(min-width: 1920px){
            margin: 0;
        }
`

const TrolleyCartContainer = styled.div`
    @media(min-width: 1920px){
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 33px;

        }
`
const SigninText = styled.h6`
        @media(min-width: 1920px){
        color: ${({ themes }) => themes.white};
        font-size: 14px;

        }
`

const ProfileIcon = styled.img`
        @media(min-width: 1920px){
            width: 21px;
        }
`
const ProfileIconContainer = styled.div`
        @media(min-width: 1920px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`

const CartText = styled.h6`
        @media(min-width: 1920px){
        color: ${({ themes }) => themes.white};
        font-size: 14px;

        }
`


const MobileNavbar = styled.div`
    @media(min-width: 1920px){
        display: none;
        background-color: '#F07039' 
    }
`
const DesktopNavbar = styled.div`
    display: none;
    @media(min-width: 1920px){
        display: flex;
        flex-direction: column;

    }
`
const NavigationContainerDesktop = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 36px 0 21px 0;
    @media(min-width: 1920px){
        justify-content: space-between;
        background-color: ${({ themes }) => themes.primaryColorOrange};
        padding-left: 3.7%;
        align-items: center;
        padding-top: 25px;
    }
`

const NavigationLinksDesktop = styled.div`
  @media(min-width: 1920px){
        padding-bottom: 17px;
        padding-left: 3.7%;
        background-color: ${({ themes }) => themes.primaryColorBlue};
        padding-top: 17px;
  }
    
`

const Link = styled.a`
    @media(min-width: 1920px){
        font-size: 16px;
        font-weight: 700;
        margin-right: 1.46%;
        color: ${({ themes }) => themes.white};
        letter-spacing: 0.2px;
    }
`

const DesktopLogo = styled.img`
    @media(min-width: 1920px){
        width: 200px;
        height: 44px;
    }
`
const Language = styled.h6`
    @media(min-width: 1920px){
        font-size: 14px;
        color: ${({ themes }) => themes.white};
        font-weight: 400;
        margin: 21px 0 0 0;

        
    }
`

const LanguageContainer = styled.div`
    @media(min-width: 1920px){
        
    }
`

export {
    MobileNavbar,
    NavbarLeft,
    NavbarRight,
    NavigationContainerMobile,
    Notification,
    TrolleyCart,
    NavigationLinksDesktop,
    DesktopNavbar,
    Link,
    NavigationContainerDesktop,
    DesktopLogo,
    Language,
    LanguageContainer,
    ProfileIcon,
    TrolleyCartContainer,
    ProfileIconContainer,
    SigninText,
    CartText
}