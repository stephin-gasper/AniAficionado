import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
// import {getAnimeDetails} from 'services/anime';
import getRatingColorKey from 'utils/getRatingColorKey';

import {
  EpisodeNumber,
  FeaturedImageOverlay,
  InnerWrapper,
  styles,
  Title,
  Details,
  Wrapper,
  ReleaseTime,
  Rating,
  EpisodeNumberWrapper,
  RatingWrapper,
} from './Cards.style';

const Cards = ({
  imageUrl,
  title,
  rating,
  latestEpisodeNumber,
  totalEpisodes,
  releaseTime,
}) => {
  const theme = useTheme();
  // const {width: windowWidth} = useWindowDimensions();

  const onTitlePress = async () => {
    // const data = await getAnimeDetails({animeName: title});
    // console.log('## title', data);
  };

  const ratingColorKey = useMemo(() => getRatingColorKey(rating), [rating]);

  return (
    <Wrapper>
      <InnerWrapper>
        <View>
          <FastImage
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
            testID="featuredImage"
            resizeMode={FastImage.resizeMode.stretch}
          />
          <FeaturedImageOverlay>
            <RatingWrapper ratingColorKey={ratingColorKey}>
              <MaterialIcons name="star" size={11} color={theme.textColor} />
              <Rating> {rating}</Rating>
            </RatingWrapper>
            <EpisodeNumberWrapper>
              <MaterialIcons name="live-tv" size={11} color={theme.textColor} />
              <EpisodeNumber>
                {' '}
                {latestEpisodeNumber}/{totalEpisodes}
              </EpisodeNumber>
            </EpisodeNumberWrapper>
          </FeaturedImageOverlay>
        </View>
        <Details>
          <Title selectable numberOfLines={2}>
            {title}
          </Title>
          <ReleaseTime>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={10}
              color={`${theme.textColor}b3`}
            />{' '}
            {releaseTime}
          </ReleaseTime>
        </Details>
      </InnerWrapper>
    </Wrapper>
  );
};

Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  latestEpisodeNumber: PropTypes.string.isRequired,
  totalEpisodes: PropTypes.string.isRequired,
  releaseTime: PropTypes.string.isRequired,
};

export default Cards;
