import React, { useContext } from 'react';
import Vasi from './../../../images/mobile/icons/payment-vasi.svg';
import Masterkard from './../../../images/mobile/icons/payment-masterkard.svg';
import Peypol from './../../../images/mobile/icons/payment-peypol.svg';
import Bitkoin from './../../../images/mobile/icons/payment-bitkoin.svg';
import { PaymentContainer } from './Payment.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';


const PAYMENT_DATA = [
    {
        logo: { image: Vasi },
        id: 1
    },
    {
        logo: { image: Masterkard },
        id: 2
    },
    {
        logo: { image: Peypol },
        id: 3
    },
    {
        logo: { image: Bitkoin },
        id: 4
    }
]


const Payment = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);
    return (
        <PaymentContainer themes={themes}>
            {PAYMENT_DATA.map((payment => {
                return (
                    <img key={payment.id} src={payment.logo.image} />
                )
            }))}
        </PaymentContainer>
    );
}

export default Payment;