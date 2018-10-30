import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ImageSlide from './ImageSlide';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LEFT_BTN = 'LEFT_BTN';
const RIGHT_BTN = 'RIGHT_BTN';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin: 16px;
  font-size: 0.75rem;
`;

const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 607.5px;
  width: 500px;
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

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    this.setState(prevState => ({
      activeSlideIndex: prevState.activeSlideIndex + 1,
      translateValue: prevState.translateValue - this.getSlideWidth()
    }));
  }

  goToPreviousSlide() {
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

  isPreviousBtnVisible() {
    let { posts } = this.props;
    const { activeSlideIndex } = this.state;
    return !!(posts && posts.length && activeSlideIndex);
  }

  isNextBtnVisible() {
    let { activeSlideIndex } = this.state;
    let { posts } = this.props;
    return !!(posts && posts.length > 1 && (activeSlideIndex < posts.length - 1));
  }

  render () {
    const {props} = this;

    if (!props.posts || !props.author || !props.info) {
      return ( 
        <Loader />
      );
    }

    const { posts, author, info } = props;
    const { translateValue } = this.state;

    return(
      <Wrapper>
        <PaginationContainer>
          {this.getPaginationText()}
        </PaginationContainer>
          <SliderWrapper>
            <SliderBtn type={LEFT_BTN} onClick={this.goToPreviousSlide} isVisible={this.isPreviousBtnVisible()} />
            <OuterWrapper>
              <InnerWrapper translateValue={translateValue}>
                {
                  posts.map((post,index) => (
                    <ImageSlide
                      key={post.id}
                      post={post}
                      info={info}
                      addOverlay={index === 0 || index === (posts.length - 1)}
                      author={author}
                      isFirst={index === 0}
                      isLast={index === (posts.length - 1)}
                    />
                  ))
                }
              </InnerWrapper>
            </OuterWrapper>
            <SliderBtn type={RIGHT_BTN} onClick={this.goToNextSlide} isVisible={this.isNextBtnVisible()} />
        </SliderWrapper>
      </Wrapper>
    );
  }
};


const ripple = keyframes`
  0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;

  & div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <div></div>
      <div></div>
    </StyledLoader>
  );
}


const Button = styled.div`
  cursor: pointer;
  padding: 16px;
  margin: 16px;
  visibility: ${props => props.isVisible ? "visible" : "hidden" };
`;

const SliderBtn = (props) => {
  const { type, onClick, isVisible } = props;
  return (
    <Button onClick={onClick} isVisible={isVisible}>
      { type === LEFT_BTN ? <FiChevronLeft /> : <FiChevronRight /> }
    </Button>
  );
};

export default Slider;