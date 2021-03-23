import React from 'react';
import Pentel from './../../../images/mobile/icons/brands-pentel.svg';
import Vessel from './../../../images/mobile/icons/brands-vessel.svg';
import Olfa from './../../../images/mobile/icons/brands-olfa.svg';
import Anex from './../../../images/mobile/icons/brands-anex.svg';
import Mitutoyo from './../../../images/mobile/icons/brands-mitutoyo.svg';
import Tone from './../../../images/mobile/icons/brands-tone.svg';

const BRANDS_DATA = [
    { logo: { image: Pentel } },
    { logo: { image: Vessel } },
    { logo: { image: Olfa } },
    { logo: { image: Anex } },
    { logo: { image: Mitutoyo } },
    { logo: { image: Tone } }
]
const Brands = () => {
    return (
        <div>

            <h6>Our Brands</h6>
            {BRANDS_DATA.map((brand) => {
                return (
                    <img src={brand.logo.image} alt="" />
                )
            })}
        </div>
    );
}

export default Brands;