import styled from 'styled-components';

const Heading = styled.h6`
    color: ${({ themes }) => themes.mediumGray};
    margin: 30px 0 30px 20px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.2px;

    @media(min-width: 1920px){
        display: none;
    }
`

const SliderContainer = styled.div`
        display: flex;
        flex-wrap: nowrap;
        overflow: scroll;
        @media(min-width: 1920px){
            display: none;
        }
`

const SliderContainerDesktop = styled.div`
    display: none;
    @media(min-width: 1920px){
        display: flex;
        background-color: #F9F9FB;
    }
`

const Slider = styled.div`
    @media(min-width: 1920px){
        display: flex;
        padding: 72px 0;
    }

`
const SliderHeading = styled.div`
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;

    @media(min-width: 1920px){
        padding-top: 166px;
        padding-left: 6.8%;
        padding-right: 7%;
        margin-bottom: 65px;
        max-width: 238px;
        box-sizing: content-box;
    }
`

const PriceContainer = styled.div`
    @media(min-width: 1920px){
        display: flex;
        align-items: baseline;
    }
`
const StarRatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ArrowContainer = styled.div`
    @media(min-width: 1920px){
        margin-left: 6.8%;
        margin-right: 7%;
    }
`

const Arrows = styled.img`
 @media(min-width: 1920px){
        margin-right: 21px;
    }
`

export {
    Heading,
    SliderContainer,
    SliderContainerDesktop,
    Slider,
    SliderHeading,
    PriceContainer,
    StarRatingContainer,
    ArrowContainer,
    Arrows
}