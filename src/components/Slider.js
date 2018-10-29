import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageSlide from './ImageSlide';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LEFT_BTN = 'LEFT_BTN';
const RIGHT_BTN = 'RIGHT_BTN';


const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationContainer = styled.div`
  text-align: center;
`;

const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 576px;
  width: 340px;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: translateX(${props => props.translateValue}px);
  transition: transform ease-out 0.45s;
  display:flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`;


class Slider extends Component {
  
  constructor(props) {
    super(props);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.state = { activeSlideIndex: null, translateValue: 0 };
  }

  getSlideWidth() {
    return document.querySelector('.slide').clientWidth;
  }

  goToNextSlide() {
    let { activeSlideIndex } = this.state;
    let { posts } = this.props
    if (!posts || !posts.length || activeSlideIndex  === (posts.length-1)) {
      return;
    }
    this.setState(prevState => ({
      activeSlideIndex: prevState.activeSlideIndex + 1,
      translateValue: prevState.translateValue - this.getSlideWidth()
    }));
  }

  goToPreviousSlide() {
    let { activeSlideIndex } = this.state;
    let { posts } = this.props;
    if (!posts || !posts.length || !activeSlideIndex) {
      return;
    }
    this.setState(prevState => ({
      activeSlideIndex: prevState.activeSlideIndex - 1,
      translateValue: prevState.translateValue + this.getSlideWidth()
    })); 
  }

  getPaginationText() {
    const { activeSlideIndex } = this.state;
    const postCount = this.props.posts.length;
    if (activeSlideIndex + 1 < postCount) {
      return (activeSlideIndex+1) + '/' + postCount;
    }
    return 'That\'s it';
  };

  render () {
    const {props} = this;
    
    if (!props.posts || !props.author || !props.info) {
      return ( 
        <Loader />
      );
    }

    const { posts, author, info } = props;
    const { translateValue } = this.state;

    console.log(this.state);

    return(
      <SliderContainer>
        <PaginationContainer>
          {this.getPaginationText()}
        </PaginationContainer>
          <SliderBtn type={LEFT_BTN} onClick={this.goToPreviousSlide} />
          <OuterWrapper>
            <InnerWrapper translateValue={translateValue}>
              {
                posts.map((post,index) => (
                  <ImageSlide
                    key={post.id}
                    post={post}
                    info={info}
                    author={author}
                    isFirst={index === 0}
                    isLast={index === (posts.length - 1)}
                  />
                ))
              }
            </InnerWrapper>
          </OuterWrapper>
          <SliderBtn type={RIGHT_BTN} onClick={this.goToNextSlide} />
      </SliderContainer>
    );
  }
};


const Loader = () => {
  return (
    <div>loader</div>
  );
}


const Button = styled.button`
  
`;

const SliderBtn = (props) => {
  const { type, onClick } = props;
  return (
    <Button onClick={onClick}>
      { type === LEFT_BTN ? <FiChevronLeft /> : <FiChevronRight /> }
    </Button>
  );
};

export default Slider;