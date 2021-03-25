import React, { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { Questions, Telephone, Button, ContactDetailsContainer } from './ContactDetails.styled';

const ContactDetails = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <ContactDetailsContainer>
            <Questions themes={themes}>Have any questions?</Questions>
            <Telephone themes={themes}>+ 123 456 789</Telephone>
            <Button themes={themes}>CONTACT</Button>
        </ContactDetailsContainer>
    );
}

export default ContactDetails;