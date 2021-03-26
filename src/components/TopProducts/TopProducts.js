import React, { useContext } from 'react';
import TopProductCard from './TopProductCard/TopProductCard';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { ThemeContext } from './../../contexts/ThemeContext';
import { Heading, SliderContainer, SliderContainerDesktop, Slider, SliderHeading, PriceContainer, StarRatingContainer, ArrowContainer, Arrows } from './TopProducts.styled';
import StarRatings from 'react-star-ratings';
import ArrowLeft from './../../images/desktop/icons/arrow-left.svg';
import ArrowRight from './../../images/desktop/icons/arrow-right.svg';

const CAROUSEL_MOCKED_DATA = [
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '1'
    },
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '2'
    },
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '3'
    }
]

const COMMON_STYLES = {
    fontSize: '18px',
    letterSpacing: '0.2px'
}

const cardStyles = {
    width: '200px',
    "min-width": '200px',
    margin: '0 auto 30px auto',
    height: '300px',
    borderRadius: '10px',
    boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.06)',
    border: 'none'
}

const cardStylesDesktop = {
    ...cardStyles,
    padding: "16px 30px 35px 30px",
    width: "unset",
    height: "unset",
    "margin-right": "51px"
}

const TopProducts = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <div>
            <Heading themes={themes}>Top 10 Products</Heading>
            <SliderContainer>
                {
                    CAROUSEL_MOCKED_DATA.map((data) => {
                        return (
                            <Card style={cardStyles}>
                                <TopProductCard />
                                <Card.Body>
                                    <Card.Title style={{ color: themes.black, fontWeight: '700', margin: '0', ...COMMON_STYLES }}>{data.title}</Card.Title>
                                    <Card.Text style={{ color: themes.lightGray, margin: '0', ...COMMON_STYLES }}>{data.text}</Card.Text>
                                    <Card.Text style={{ color: themes.primaryColorOrange, margin: '8px 0 0 0', ...COMMON_STYLES }}>{data.discounted}</Card.Text>
                                    <Card.Text style={{ color: themes.lightGray, textDecoration: 'line-through', margin: '0', ...COMMON_STYLES }}>{data.price}</Card.Text>
                                </Card.Body>
                            </Card>

                        )
                    })
                }
            </SliderContainer>

            <SliderContainerDesktop>
                <ArrowContainer>
                    <SliderHeading>This Weeks Top 10 Selected Products</SliderHeading>
                    <Arrows src={ArrowLeft} />
                    <Arrows src={ArrowRight} />
                </ArrowContainer>
                <Slider>
                    {
                        CAROUSEL_MOCKED_DATA.map((data) => {
                            return (
                                <Card style={cardStylesDesktop} key={data.id}>
                                    <TopProductCard />
                                    <Card.Body>
                                        <Card.Title style={{ color: themes.black, fontWeight: '700', margin: '0', ...COMMON_STYLES }}>{data.title}</Card.Title>
                                        <Card.Text style={{ color: themes.lightGray, margin: '0', ...COMMON_STYLES }}>{data.text}</Card.Text>
                                        <StarRatingContainer>
                                            <PriceContainer>
                                                <Card.Text style={{ color: themes.primaryColorOrange, margin: '8px 16px 0 0', ...COMMON_STYLES }}>{data.discounted}</Card.Text>
                                                <Card.Text style={{ color: themes.lightGray, textDecoration: 'line-through', margin: '0', ...COMMON_STYLES }}>{data.price}</Card.Text>
                                            </PriceContainer>
                                            <StarRatings
                                                rating={4}
                                                starRatedColor="blue"
                                                numberOfStars={4}
                                                name='rating'
                                                starDimension="14px"
                                                starRatedColor="#FF723D"
                                                starSpacing="1px"
                                            />
                                        </StarRatingContainer>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </SliderContainerDesktop>
        </div>
    );
}

export default TopProducts;