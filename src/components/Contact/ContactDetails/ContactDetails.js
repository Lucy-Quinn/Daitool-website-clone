import React, { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { Questions, Telephone, Button, ContactDetailsContainer, ContactDetailsGroup, ContactTextGroup, Heading, Description, ContactNumberGroup } from './ContactDetails.styled';

const ContactDetails = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <ContactDetailsContainer>
            <ContactTextGroup>
                <Heading>CONTACT</Heading>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Description>
            </ContactTextGroup>
            <ContactDetailsGroup>
                <ContactNumberGroup>
                    <Questions themes={themes}>Have any questions?</Questions>
                    <Telephone themes={themes}>+ 123 456 789</Telephone>
                </ContactNumberGroup>
                <Button themes={themes}>CONTACT</Button>
            </ContactDetailsGroup>
        </ContactDetailsContainer>
    );
}

export default ContactDetails;