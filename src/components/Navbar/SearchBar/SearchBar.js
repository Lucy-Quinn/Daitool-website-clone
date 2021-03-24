import React from 'react';
import MagnifyingGlass from './../../../images/mobile/icons/navbar-magnifying-glass-icon.svg';
import { Form, Input, Image } from './SearchBar.styled';

const SearchBar = () => {
    return (
        <Form action="#">
            <Input type="text" />
            <Image src={MagnifyingGlass} alt="Magnifying glass" />
        </Form>
    );
}

export default SearchBar;