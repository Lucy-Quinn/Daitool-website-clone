import React from 'react';
import MostViewedImage from './../../../images/mobile/photos/most-viewed-category.png';

const MostViewed = () => {
    return (
        <div>
            <img src={MostViewedImage} alt="image of tools" style={{ width: '100%' }} />
            <h6>Most Viewed Category</h6>
            <h4>Highlighted Product Category</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
    );
}

export default MostViewed;