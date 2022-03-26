import React from 'react';
import PropTypes from 'prop-types';
import {
  FeaturedImage,
  FeaturedImageWrapper,
  Title,
  Wrapper,
} from './Cards.style';

const Cards = ({imageUrl, title}) => (
  <Wrapper>
    <FeaturedImageWrapper>
      <FeaturedImage
        source={{
          uri: imageUrl,
        }}
      />
    </FeaturedImageWrapper>
    <Title>{title}</Title>
  </Wrapper>
);

Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;
