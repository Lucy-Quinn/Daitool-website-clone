import React, { useContext } from 'react';
import Pentel from './../../../images/mobile/icons/brands-pentel.svg';
import Vessel from './../../../images/mobile/icons/brands-vessel.svg';
import Olfa from './../../../images/mobile/icons/brands-olfa.svg';
import Anex from './../../../images/mobile/icons/brands-anex.svg';
import Mitutoyo from './../../../images/mobile/icons/brands-mitutoyo.svg';
import Tone from './../../../images/mobile/icons/brands-tone.svg';
import { Heading, BrandContainer, Image, ImageContainer } from './Brands.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

const BRANDS_DATA = [
    {
        logo:
            { image: Pentel },
        id: '1'
    },
    {
        logo:
            { image: Vessel },
        id: '2'
    },
    {
        logo:
            { image: Olfa },
        id: '3'
    },
    {
        logo:
            { image: Anex },
        id: '4'
    },
    {
        logo:
            { image: Mitutoyo },
        id: '5'
    },
    {
        logo:
            { image: Tone },
        id: '6'
    }
]

const Brands = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            <Heading themes={themes}>Our Brands</Heading>
            <BrandContainer>
                {BRANDS_DATA.map((brand) => {
                    return (
                        <ImageContainer key={brand.id} >
                            <Image src={brand.logo.image} alt="" />
                        </ImageContainer>
                    )
                })}
            </BrandContainer>
        </div>
    );
}

export default Brands;