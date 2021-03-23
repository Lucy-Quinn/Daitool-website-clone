import React from 'react';
import MagnifyingGlass from './../../../images/mobile/icons/navbar-magnifying-glass-icon.svg';

const SearchBar = () => {
    return (
        <form action="#">
            <input type="text" />
            <img src={MagnifyingGlass} alt="Magnifying glass" />
        </form>
    );
}

export default SearchBar;