import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { ThemeContext } from './../../../contexts/ThemeContext';
import BlogPost from './../../../images/mobile/photos/blog-post.png';

const CAROUSEL_MOCKED_DATA = [
    {
        title: "Blog post publication 1",
        text: "Author ",
        id: '1'
    },
    {
        title: "Blog post publication 1",
        text: "Author ",
        id: '2'
    },
    {
        title: "Blog post publication 1",
        text: "Author ",
        id: '3'
    },
]

const BlogsCard = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            <Carousel>
                {
                    CAROUSEL_MOCKED_DATA.map((data) => {
                        return (
                            <Carousel.Item key={data.id}>
                                <Card style={{ width: '21rem', margin: '0 auto 30px auto', height: '252px', borderRadius: '10px', border: 'none' }}>
                                    <img src={BlogPost} />
                                    <Card.Body style={{ margin: '0 0 0 -21px' }}>
                                        <Card.Title style={{ color: themes.black, margin: '0 0 8px 0', letterSpacing: '0.2px', fontWeight: '700', fontSize: '18px' }}>{data.title}</Card.Title>
                                        <Card.Text style={{ color: themes.lightGray, margin: '0', fontSize: '14px', letterSpacing: '0.2px', weight: '400' }}>{data.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default BlogsCard;