import React from 'react';
import Vasi from './../../../images/mobile/icons/payment-vasi.svg';
import Masterkard from './../../../images/mobile/icons/payment-masterkard.svg';
import Peypol from './../../../images/mobile/icons/payment-peypol.svg';
import Bitkoin from './../../../images/mobile/icons/payment-bitkoin.svg';
import { PaymentContainer } from './Payment.styled';


const PAYMENT_DATA = [
    { logo: { image: Vasi } },
    { logo: { image: Masterkard } },
    { logo: { image: Peypol } },
    { logo: { image: Bitkoin } }
]


const Payment = () => {
    return (
        <PaymentContainer>
            {PAYMENT_DATA.map((payment, i) => {
                return (
                    <img key={i} src={payment.logo.image} />
                )
            })}
        </PaymentContainer>
    );
}

export default Payment;