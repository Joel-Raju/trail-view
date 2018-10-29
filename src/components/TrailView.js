import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getTrail } from '../store/actions/trailActions';
import { getActiveTrailForRender } from '../store/selectors';
import Slider from './Slider';

const Container = styled.article`
  display: flex;
  flex-direction: row;
  background: #000000;
  flex-wrap: wrap;
  color: #fff;
`;

const MainContent = styled.div`
  flex-basis: 66.66%;
  flex-basis: 720px;
  flex-grow: 1;
  flex-shrink: 0;
`;

const RelatedContent = styled.div`
  flex-basis: 32.33%;
  flex-grow: 0;
`;

class TrailView extends Component {

  componentDidMount() {
    this.props.getTrail();
  }

  render() {
    const { activeTrail } = this.props;
    return (
      <Container>
        <MainContent>
          <Slider
            { ...activeTrail } 
          />
        </MainContent>
        <RelatedContent>
          hello world
        </RelatedContent>
      </Container>
    );
  }
};


const mapStateToProps = (state) => {
  const { trailReducer } = state;
  return {
    activeTrail: getActiveTrailForRender(trailReducer),
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({
  getTrail,
}, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(TrailView);