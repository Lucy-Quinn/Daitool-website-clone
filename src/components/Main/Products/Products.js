import React, { useContext } from 'react';
import Safety from './../../../images/mobile/photos/safety.png';
import Janitorial from './../../../images/mobile/photos/janitorial.png';
import Tools from './../../../images/mobile/photos/tools.png';
import Woodworking from './../../../images/mobile/photos/woodworking.png';
import Gardening from './../../../images/mobile/photos/gardening.png';
import OfficeSupplies from './../../../images/mobile/photos/office-supplies.png';
import { ProductsContainer, ImageContainer, ImageContent, TopHeading, MiddleHeading } from './Products.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

const PRODUCTS_DATA = [
    {
        name: 'Safety',
        image: { image: Safety },
        id: '1'

    },
    {
        name: 'Janitorial',
        image: { image: Janitorial },
        id: '2'

    },
    {
        name: 'Tools',
        image: { image: Tools },
        id: '3'
    },
    {
        name: 'Woodworking',
        image: { image: Woodworking },
        id: '4'
    },
    {
        name: 'Gardening',
        image: { image: Gardening },
        id: '5'
    },
    {
        name: 'Office Supplies',
        image: { image: OfficeSupplies },
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
                    <ImageContainer image={product.image.image} key={product.id}>
                        <ImageContent>
                            <TopHeading themes={themes}>{product.name}</TopHeading>
                            <MiddleHeading themes={themes}>Subtitulo</MiddleHeading>
                        </ImageContent>
                    </ImageContainer>
                )
            })}
        </ProductsContainer>
    );
}

export default Products;