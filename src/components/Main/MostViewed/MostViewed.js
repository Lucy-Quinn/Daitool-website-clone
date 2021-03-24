import React, { useContext } from 'react';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { ImageContainer, MostViewedContainer, TopHeading, MiddleHeading, Description } from './MostViewed.styled';

const MostViewed = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <MostViewedContainer>
            <ImageContainer>
                <TopHeading themes={themes}>MOST VIEWED CATEGORY</TopHeading>
                <MiddleHeading themes={themes}>Highlighted Product Category</MiddleHeading>
                <Description themes={themes}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Description>
            </ImageContainer>
        </MostViewedContainer>
    );
}

export default MostViewed;