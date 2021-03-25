import styled from 'styled-components';

const Heading = styled.h6`
 color: ${({ themes }) => themes.mediumGray};
    margin: 32px auto 20px 20px;
    font-size: 18px;
    font-weight: 600;
`

const Description = styled.h6`
    font-size: 14px;
    color: ${({ themes }) => themes.mediumGray};
    margin: 5px 0 0 0;
    font-weight: 400;
`

const PromiseContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const DaitoolPromise = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`

const Image = styled.img`
    margin: 0;
    width: 54%;
`

const PromiseName = styled.p`
    font-size: 18px;
    margin: 0;
    color: ${({ themes }) => themes.black};
    font-weight: 700;
`

export {
    Heading,
    Description,
    PromiseContainer,
    DaitoolPromise,
    Image,
    PromiseName
}