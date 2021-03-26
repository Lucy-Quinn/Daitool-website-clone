import React from 'react';
import TopProductSaw from './../../../images/mobile/photos/top-product-saw.png';
import { Image, ImageContainer } from './TopProductCard.styled';

const TopProductCard = () => {
    return (
        <ImageContainer>
            <Image className="img-fluid" src={TopProductSaw} alt="" />
        </ImageContainer>
    );
}

export default TopProductCard;