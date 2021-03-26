import React, { useContext } from 'react';
import BlogsCard from './BlogsCard/BlogsCard';
import { HeadingContainer, Heading, Link, BlogsContainer } from './Blogs.styled';
import { ThemeContext } from './../../contexts/ThemeContext';

const Blogs = () => {

    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <BlogsContainer>
            <HeadingContainer>
                <Heading themes={themes}>Blog Posts</Heading>
                <Link themes={themes}>+ View More</Link>
            </HeadingContainer>
            <BlogsCard />
        </BlogsContainer>
    );
}

export default Blogs;