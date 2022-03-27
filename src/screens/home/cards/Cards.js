import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image} from 'react-native';
// import Image from 'react-native-scalable-image';

import {FeaturedImageWrapper, Title, Wrapper} from './Cards.style';

const Cards = ({imageUrl, title}) => (
  <Wrapper>
    <FeaturedImageWrapper>
      <Image
        width={Dimensions.get('window').width}
        source={{
          uri: imageUrl,
        }}
        testID="featuredImage"
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
