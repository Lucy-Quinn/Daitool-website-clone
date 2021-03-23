import React from 'react';
import Brands from './Brands/Brands';
import MostViewed from './MostViewed/MostViewed';
import Products from './Products/Products';
import Promise from './Promise/Promise';

const Main = () => {
    return (
        <div>
            <MostViewed />
            <Products />
            <Brands />
            <Promise />
        </div>
    );
}

export default Main;