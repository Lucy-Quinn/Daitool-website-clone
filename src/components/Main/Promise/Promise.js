import React, { useContext } from 'react';
import Efficient from './../../../images/mobile/icons/promise-efficient.svg';
import HighQuality from './../../../images/mobile/icons/promise-high-quality.svg';
import Reliable from './../../../images/mobile/icons/promise-reliable.svg';
import Global from './../../../images/mobile/icons/promise-global.svg';
import CustomerFocus from './../../../images/mobile/icons/promise-customer-focus.svg';
import { ThemeContext } from './../../../contexts/ThemeContext';
import { Heading, Description, PromiseContainer, DaitoolPromise, Image, PromiseName } from './Promise.styled';

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

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            <Heading themes={themes}>Daitool Promise</Heading>

            <PromiseContainer>
                {PROMISE_DATA.map((promise, i) => {
                    return (
                        <DaitoolPromise key={i}>
                            <Image src={promise.icon.image} alt="" />
                            <PromiseName themes={themes}>{promise.name}</PromiseName>
                            <Description themes={themes}>{promise.description}</Description>
                        </DaitoolPromise>
                    )
                })}
            </PromiseContainer>
        </div>
    );
}

export default Promise;