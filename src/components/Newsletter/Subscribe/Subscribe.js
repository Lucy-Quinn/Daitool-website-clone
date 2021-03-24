import React, { useContext } from 'react';
import { Discount, Button, SubscribeContainer } from './Subscribe.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

const Subscribe = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <SubscribeContainer>
            <Discount themes={themes}>70% off</Discount>
            <Button themes={themes}>SUBSCRIBE</Button>
        </SubscribeContainer>
    );
}

export default Subscribe;