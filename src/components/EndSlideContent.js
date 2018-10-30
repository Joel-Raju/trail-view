import React from 'react';
import styled from 'styled-components';
import { FiHeart, FiMessageSquare, FiMoreHorizontal } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-content: flex-end;
  justify-content: flex-end;
  
  & div:first-child {
    margin: 8px;
    font-size: 1rem;
  }

  & > div:nth-child(2) {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.65rem;
    text-align: center;
    margin: 8px;
    text-transform: uppercase;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 32px;

  & img {
    width: 50px;
    height: 50px;
    margin: 8px;
  }
  & div {
    margin: 8px;
  }

  & div:first-child {
    font-size: 0.65rem;
    
  }
  & div:last-child { 
    font-size: 0.9rem;
  }
`;

const STATS_TYPE_LIKES = 'STATS_TYPE_LIKES';
const STATS_TYPE_COMMENT = 'STATS_TYPE_COMMENT';

const SOCIAL_ICON_WHATSAPP = 'SOCIAL_ICON_WHATSAPP';
const SOCIAL_ICON_FACEBOOK = 'SOCIAL_ICON_FACEBOOK';
const SOCIAL_ICON_INSTAGRAM = 'SOCIAL_ICON_INSTAGRAM';
const SOCIAL_ICON_MORE = 'SOCIAL_ICON_MORE';

const ICON_TYPE_SOCIAL = 'ICON_TYPE_SOCIAL';
const ICON_TYPE_STATS = 'ICON_TYPE_STATS';


const EndSlideContent = (props) => {
  const { author, content } = props;

  return(
    <Wrapper>
      <div>
        <IconWithLabel iconType={ICON_TYPE_STATS} type={STATS_TYPE_LIKES} text={`${content.counts.loves} Likes`} />
        <IconWithLabel iconType={ICON_TYPE_STATS} type={STATS_TYPE_COMMENT} text={`${content.counts.comments} Comments`} />
      </div>
      <div>Share Trail Video To</div>
      <SocialIconsWrapper>
        <IconWithLabel iconType={ICON_TYPE_SOCIAL} text="WhatsApp" type={SOCIAL_ICON_WHATSAPP} />
        <IconWithLabel iconType={ICON_TYPE_SOCIAL} text="Instagram" type={SOCIAL_ICON_INSTAGRAM} />
        <IconWithLabel iconType={ICON_TYPE_SOCIAL} text="Facebook" type={SOCIAL_ICON_FACEBOOK} />
        <IconWithLabel iconType={ICON_TYPE_SOCIAL} text="More" type={SOCIAL_ICON_MORE} />
      </SocialIconsWrapper>
      <AuthorWrapper>  
        <div>VIEW MORE TRAILS BY</div>
        <img src={author.image} alt={author.name} />
        <div>{author.name}</div>
      </AuthorWrapper>
    </Wrapper>
  )
};


const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;

  & > div:first-child {
    background: #FFFFFF;
    width: ${props => props.iconType === ICON_TYPE_STATS ? "2rem" : "1rem" };
    height: ${props => props.iconType === ICON_TYPE_STATS ? "2rem" : "1rem" };
    border-radius: 50%;
    padding: 0.5rem;
    text-align: center
    cursor: pointer;
    
    & * {
      margin-top: ${props => props.iconType === ICON_TYPE_STATS ? "0.25rem" : "0rem" };
    }
  }

  & div {
    font-size: 0.75rem;
  }
`;

const IconWithLabel = (props) => {
  const { type, text, iconType } = props;
  return (
    <StyledIcon iconType={iconType}>
      { type === STATS_TYPE_LIKES && 
        <div>
          <FiHeart size={24} color={'red'} />
        </div> 
      }
      { type === STATS_TYPE_COMMENT && 
        <div>
          <FiMessageSquare size={24} color={'black'} />
        </div>  
      }
      { type === SOCIAL_ICON_WHATSAPP && 
        <div>
          <FaWhatsapp size={16} color={'#25d366'} />
        </div> 
      }
      { type === SOCIAL_ICON_FACEBOOK && 
        <div>
          <FaFacebookSquare size={16} color={'#3b5998'} />
        </div>  
      }
      { type === SOCIAL_ICON_INSTAGRAM && 
        <div>
          <FaInstagram size={16} color={'#e1306c'} />
        </div>  
      }

      { type === SOCIAL_ICON_MORE && 
        <div>
          <FiMoreHorizontal size={16} color={'#fcaf45'} />
        </div>  
      }
      <div>{text}</div>
    </StyledIcon>
  );
};

export default EndSlideContent;
