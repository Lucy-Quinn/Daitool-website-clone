import React from 'react';
import TopProductSaw from './../../../images/mobile/photos/top-product-saw.png';
import { Image } from './TopProductCard.styled';

const TopProductCard = () => {
    return (
        <div>
            <Image src={TopProductSaw} alt="" />
        </div>
    );
}

export default TopProductCard;