import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';

import {
  EpisodeNumber,
  FeaturedImageOverlay,
  FeaturedImageWrapper,
  styles,
  Title,
  Wrapper,
} from './Cards.style';

const Cards = ({imageUrl, title, latestEpisodeNumber}) => (
  <Wrapper>
    <FeaturedImageWrapper>
      <Image
        width={Dimensions.get('window').width - 40}
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
        testID="featuredImage"
      />
      <FeaturedImageOverlay />
      <EpisodeNumber>#{latestEpisodeNumber}</EpisodeNumber>
    </FeaturedImageWrapper>
    <Title>{title}</Title>
  </Wrapper>
);

Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  latestEpisodeNumber: PropTypes.number.isRequired,
};

export default Cards;
