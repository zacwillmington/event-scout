import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInImage = styled.div`
    animation: 2s ${fadeInAnimation};
`;

class MainImageComponent extends Component {
    render() {
        return (
            <FadeInImage>
                <div className='main-image-component'>
                    <h1>FIND YOUR NEXT EVENT</h1>
                </div>
            </FadeInImage>
        );
    }
}

export default MainImageComponent;