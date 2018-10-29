import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SlideContent from './SlideContent';
import EndSlideContent from './EndSlideContent';
import StartSlideContent from './StartSlideContent';


// const ImageWrapper = styled.div`
//   position: relative;
//   height: 576px;
//   width: 60%;
//   margin: 0 auto;
// `;

const ImageWrapper = styled.div`
  position: relative;
`;


const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  border-radius: 2px;
`;

const ImageSlide = (props) => {
  const { post, info, isFirst, isLast, author } = props;

  return (
    <ImageWrapper>
      <ImageContainer imageUrl={post.imageUrl}>
        { isFirst && <StartSlideContent content={info} author={author} /> }
        { isLast && !isLast && <EndSlideContent/> }
        { !isFirst && !isLast && <SlideContent content={post} /> }
      </ImageContainer>
    </ImageWrapper>
  );
};


export default ImageSlide;