import React, { useContext } from 'react';
import { SignupContainer, Image, Heading, Description, Input, Button, ButtonContainer } from './Signup.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';
import Newsletter from './../../../images/mobile/icons/newsletter-icon.svg';

const Signup = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <SignupContainer themes={themes}>
            <Image src={Newsletter} alt="letters icon" />
            <Heading themes={themes}>Sign Up for Newsletter</Heading>
            <Description themes={themes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
            <Input type="text" placeholder="Enter your email here" />
            <ButtonContainer><Button themes={themes}>SUBSCRIBE</Button></ButtonContainer>
        </SignupContainer>
    );
}

export default Signup;