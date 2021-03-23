import React from 'react';
import Safety from './../../../images/mobile/photos/safety.png';
import Janitorial from './../../../images/mobile/photos/janitorial.png';
import Tools from './../../../images/mobile/photos/tools.png';
import Woodworking from './../../../images/mobile/photos/woodworking.png';
import Gardening from './../../../images/mobile/photos/gardening.png';
import OfficeSupplies from './../../../images/mobile/photos/office-supplies.png';
import { prettyDOM } from '@testing-library/dom';

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
    return (
        <div>
            {PRODUCTS_DATA.map((product, i) => {
                return (
                    <div key={i}>
                        <img src={product.image.image} />
                        <h5>{product.name}</h5>
                        <h6>Subtitulo</h6>
                        {/* <h6>Most Viewed Category</h6>
            <h4>Highlighted Product Category</h4> */}
                    </div>
                )
            })}
        </div>
    );
}

export default Themes;