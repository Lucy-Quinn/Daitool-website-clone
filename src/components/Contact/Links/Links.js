import React, { useContext } from 'react';
import { LinksContainer, QuickLinksContainer, Heading, CustomerAreaContainer, LinksList, Link } from './Links.styled';
import { ThemeContext } from './../../../contexts/ThemeContext';

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
    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <LinksContainer>
            <QuickLinksContainer>
                <Heading themes={themes}>QUICK LINKS</Heading>
                <LinksList>
                    {LINKS_DATA.quick.map((link, i) => {
                        return (
                            <div key={i} style={{ marginBottom: '10px' }}>
                                <Link href="#" themes={themes}>{link}</Link>
                            </div>
                        )
                    })}
                </LinksList>
            </QuickLinksContainer>
            <CustomerAreaContainer>
                <Heading themes={themes}>CUSTOMER AREA</Heading>
                <LinksList>
                    {LINKS_DATA.customerArea.map((link, i) => {
                        return (
                            <div key={i} style={{ marginBottom: '10px' }}>
                                <Link href="#" themes={themes}>{link}</Link>
                            </div>
                        )
                    })}
                </LinksList>
            </CustomerAreaContainer>

        </LinksContainer>
    );
}

export default Links;