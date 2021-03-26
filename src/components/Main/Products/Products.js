import React, { useContext } from 'react';
import SafetyMobile from './../../../images/mobile/photos/safety.png';
import JanitorialMobile from './../../../images/mobile/photos/janitorial.png';
import ToolsMobile from './../../../images/mobile/photos/tools.png';
import WoodworkingMobile from './../../../images/mobile/photos/woodworking.png';
import GardeningMobile from './../../../images/mobile/photos/gardening.png';
import OfficeSuppliesMobile from './../../../images/mobile/photos/office-supplies.png';

import SafetyDesktop from './../../../images/desktop/photos/Safety.png';
import JanitorialDesktop from './../../../images/desktop/photos/Janitorial.png';
import ToolsDesktop from './../../../images/desktop/photos/Tools.png';
import WoodworkingDesktop from './../../../images/desktop/photos/Woodworking.png';
import GardeningDesktop from './../../../images/desktop/photos/Garden.png';
import OfficeSuppliesDesktop from './../../../images/desktop/photos/Office.png';

import { ProductsContainer, ImageContainerMobile, ImageContainerDesktop, ImageContent, TopHeading, MiddleHeading } from './Products.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

const PRODUCTS_DATA = [
    {
        name: 'Safety',
        image: { imageMobile: SafetyMobile, imageDesktop: SafetyDesktop },
        id: '1'

    },
    {
        name: 'Janitorial',
        image: { imageMobile: JanitorialMobile, imageDesktop: JanitorialDesktop },
        id: '2'

    },
    {
        name: 'Tools',
        image: { imageMobile: ToolsMobile, imageDesktop: ToolsDesktop },
        id: '3'
    },
    {
        name: 'Woodworking',
        image: { imageMobile: WoodworkingMobile, imageDesktop: WoodworkingDesktop },
        id: '4'
    },
    {
        name: 'Gardening',
        image: { imageMobile: GardeningMobile, imageDesktop: GardeningDesktop },
        id: '5'
    },
    {
        name: 'Office Supplies',
        image: { imageMobile: OfficeSuppliesMobile, imageDesktop: OfficeSuppliesDesktop },
        id: '6'
    }
]

const Products = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <ProductsContainer>
            {PRODUCTS_DATA.map((product) => {
                return (
                    <>
                        <ImageContainerMobile image={product.image.imageMobile} key={product.id}>
                            <ImageContent>
                                <TopHeading themes={themes}>{product.name}</TopHeading>
                                <MiddleHeading themes={themes}>Subtitulo</MiddleHeading>
                            </ImageContent>
                        </ImageContainerMobile>
                        <ImageContainerDesktop image={product.image.imageDesktop} key={product.id}>
                            <ImageContent>
                                <TopHeading themes={themes}>{product.name}</TopHeading>
                                <MiddleHeading themes={themes}>Subtitulo</MiddleHeading>
                            </ImageContent>
                        </ImageContainerDesktop>
                    </>
                )
            })}
        </ProductsContainer>
    );
}

export default Products;