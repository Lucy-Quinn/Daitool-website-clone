import React from 'react';
import { LinksContainer, QuickLinksContainer, Heading, CustomerAreaContainer, LinksList, Link } from './Links.styled';

const LINKS_DATA =
{
    quick: ['About us',
        'Blog',
        'Shop',
        'Brands',
        'Wholesale']

    ,
    customerArea: ['My Account',
        'Deliveries',
        'Help Center (FAQs)',
        'Terms',
        'Privacy Policy'
    ]
}

const Links = () => {
    return (
        <LinksContainer>
            <QuickLinksContainer>
                <Heading>QUICK LINKS</Heading>
                <LinksList>
                    {LINKS_DATA.quick.map((link) => {
                        return (
                            <div>
                                <Link href="#">{link}</Link>
                            </div>
                        )
                    })}
                </LinksList>
            </QuickLinksContainer>
            <CustomerAreaContainer>
                <Heading>CUSTOMER AREA</Heading>
                <LinksList>
                    {LINKS_DATA.customerArea.map((link) => {
                        return (
                            <div>
                                <Link href="#">{link}</Link>
                            </div>
                        )
                    })}
                </LinksList>
            </CustomerAreaContainer>

        </LinksContainer>
    );
}

export default Links;