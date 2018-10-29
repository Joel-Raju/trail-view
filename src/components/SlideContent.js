import React from 'react';
import styled from 'styled-components';
import { 
  FiMapPin, 
  FiShare2, 
  FiBookmark 
} from 'react-icons/fi';

const TextWithOverlay = styled.span`
  background: rgba(0, 0, 0, 0.7);
  color: #FFFFFF;
  padding: 8px;
  font-size: .75rem;
  margin: 16px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

const StyledSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ActionsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 16px;
`;

const ActionBtn = styled.div`
  cursor: pointer;
  margin: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SlideContent = (props) => {
  const { checkInLocation, about } = props.content;
  return (
    <StyledSlideContent>
      <Header>
        <TextWithOverlay>
          <FiMapPin />
          {checkInLocation}
        </TextWithOverlay>
        <ActionsWrapper>
          <ActionBtn>
            <FiBookmark /> Save
          </ActionBtn>
          <ActionBtn>
            <FiShare2 /> Share Post
          </ActionBtn>
        </ActionsWrapper>  
      </Header>
      <TextWithOverlay>{about}</TextWithOverlay>
    </StyledSlideContent>   
  );
}

export default SlideContent;