import React, { useContext } from 'react';
import Safety from './../../../images/mobile/photos/safety.png';
import Janitorial from './../../../images/mobile/photos/janitorial.png';
import Tools from './../../../images/mobile/photos/tools.png';
import Woodworking from './../../../images/mobile/photos/woodworking.png';
import Gardening from './../../../images/mobile/photos/gardening.png';
import OfficeSupplies from './../../../images/mobile/photos/office-supplies.png';
import { ImageContainer, ImageContent, TopHeading, MiddleHeading } from './Products.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

const PRODUCTS_DATA = [
    {
        name: 'Safety',
        image: { image: Safety }
    },
    {
        name: 'Janitorial',
        image: { image: Janitorial }
    },
    {
        name: 'Tools',
        image: { image: Tools }
    },
    {
        name: 'Woodworking',
        image: { image: Woodworking }
    },
    {
        name: 'Gardening',
        image: { image: Gardening }
    },
    {
        name: 'Office Supplies',
        image: { image: OfficeSupplies }
    }
]

const Themes = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            {PRODUCTS_DATA.map((product, i) => {
                return (
                    <div key={i}>
                        <ImageContainer image={product.image.image}>
                            <ImageContent>
                                <TopHeading themes={themes}>{product.name}</TopHeading>
                                <MiddleHeading themes={themes}>Subtitulo</MiddleHeading>
                            </ImageContent>
                        </ImageContainer>
                    </div>
                )
            })}
        </div>
    );
}

export default Themes;