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
    { logo: { image: Pentel } },
    { logo: { image: Vessel } },
    { logo: { image: Olfa } },
    { logo: { image: Anex } },
    { logo: { image: Mitutoyo } },
    { logo: { image: Tone } }
]

const Brands = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>

            <Heading themes={themes}>Our Brands</Heading>
            <BrandContainer>
                {BRANDS_DATA.map((brand, i) => {
                    return (
                        <ImageContainer>
                            <Image src={brand.logo.image} alt="" key={i} />
                        </ImageContainer>
                    )
                })}
            </BrandContainer>
        </div>
    );
}

export default Brands;