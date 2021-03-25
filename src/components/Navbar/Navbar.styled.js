import styled from 'styled-components';

const NavbarLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 51%;
`

const NavbarRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 29%;
    margin-right: -4%;
`

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 36px 0 21px 0;
`

const Notification = styled.img`
    position: relative;
    right: 9px;
    bottom: 13px;
`

const TrolleyCart = styled.img`
        margin-left: 10px;

`

export {
    NavbarLeft,
    NavbarRight,
    NavigationContainer,
    Notification,
    TrolleyCart
}