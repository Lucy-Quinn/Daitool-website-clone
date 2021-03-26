import React, { useContext } from 'react';
import Pentel from './../../../images/mobile/icons/brands-pentel.svg';
import Vessel from './../../../images/mobile/icons/brands-vessel.svg';
import Olfa from './../../../images/mobile/icons/brands-olfa.svg';
import Anex from './../../../images/mobile/icons/brands-anex.svg';
import Mitutoyo from './../../../images/mobile/icons/brands-mitutoyo.svg';
import Tone from './../../../images/mobile/icons/brands-tone.svg';
import { Heading, BrandContainer, Image, ImageContainer, ArrowLeft, ArrowRight } from './Brands.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';
import ArrowLeftIcon from './../../../images/desktop/icons/brands-arrow-left.svg';
import ArrowRightIcon from './../../../images/desktop/icons/brands-arrow-right.svg';


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
        <div style={{ marginRight: '8%', marginLeft: '8%' }}>
            <Heading themes={themes}>Our Brands</Heading>
            <BrandContainer>
                <ArrowLeft src={ArrowLeftIcon} />
                {BRANDS_DATA.map((brand) => {
                    return (
                        <ImageContainer key={brand.id} >
                            <Image src={brand.logo.image} alt="" />
                        </ImageContainer>
                    )
                })}
                <ArrowRight src={ArrowRightIcon} />

            </BrandContainer>
        </div>
    );
}

export default Brands;