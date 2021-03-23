import React from 'react';
import Efficient from './../../../images/mobile/icons/promise-efficient.svg';
import HighQuality from './../../../images/mobile/icons/promise-high-quality.svg';
import Reliable from './../../../images/mobile/icons/promise-reliable.svg';
import Global from './../../../images/mobile/icons/promise-global.svg';
import CustomerFocus from './../../../images/mobile/icons/promise-customer-focus.svg';


const PROMISE_DATA = [
    {
        icon: { image: Efficient },
        name: 'Efficient',
        description: 'International Shipping'
    },
    {
        icon: { image: HighQuality },
        name: 'High-Quality',
        description: 'Guaranteed'
    },
    {
        icon: { image: Reliable },
        name: 'Reliable',
        description: 'from $40'
    },
    {
        icon: { image: Global },
        name: 'Global',
        description: 'Ships to 50 countries'
    },
    {
        icon: { image: CustomerFocus },
        name: 'Customer Focus',
        description: 'from $40'
    },
]
const Promise = () => {
    return (
        <div>
            <h6>Daitool Promise</h6>
            {PROMISE_DATA.map((promise) => {
                return (
                    <div>
                        <img src={promise.icon.image} alt="" />
                        <p>{promise.name}</p>
                        <h6>{promise.description}</h6>
                    </div>
                )
            })}
        </div>
    );
}

export default Promise;