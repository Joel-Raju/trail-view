import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 16px;
`;

const StyledHeader = styled.h2`
  padding: 8px;
`;

const StatsContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

const AuthorContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AuthorTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorHandler = styled.div`
  display: flex;
  flex-direction: row;
`;

const AuthorPic = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledLabel = styled.div`
  font-size: .75rem;
`;

const FollowBtn = styled.span`
  color: #008080;
  font-weight: bold;
  cursor: pointer;
  margin: 0 8px;
`;

const StatsSeparator = styled.span`
  &:after {
    content: "•";
    margin: 8px;
    color: rgba(255, 255, 255, .5);
  }
`;


const StartSlideContent = (props) => {
  const { content, author } = props;
  return (
    <StyledContent>
      <StyledHeader>{content.name}</StyledHeader>
      <StatsContainer>
        {content.counts.posts} Posts
        <StatsSeparator />
        {content.counts.views} Views
      </StatsContainer>
      <AuthorContainer>
        <AuthorTitle>
          <StyledLabel> Trail By </StyledLabel>
          <AuthorHandler>
            <span>{author.name}</span>
            <FollowBtn>Follow</FollowBtn>
          </AuthorHandler>
        </AuthorTitle>
        
        <AuthorPic src={author.image} />
      </AuthorContainer>
    </StyledContent>
    
  );
};

export default StartSlideContent;