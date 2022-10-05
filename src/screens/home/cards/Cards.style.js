import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const borderRadiusValue = 5;

export const Wrapper = styled.View`
  margin-bottom: 20px;
  width: 33.333333333333336%;
  padding: 0 2.5px;
`;

export const InnerWrapper = styled.View`
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.secondaryColor};
  border-radius: ${borderRadiusValue}px;
  flex: 1;
`;

export const FeaturedImageOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const TagWrapper = styled.View`
  position: absolute;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 2px 4px;
`;

export const TagText = styled.Text`
  color: ${props => props.theme.textColor};
  font-size: 10px;
`;

export const RatingWrapper = styled(TagWrapper)`
  background-color: ${props =>
    props.theme.ratingColors[props.ratingColorKey]}d9;
  bottom: 2px;
  left: 2px;
`;

export const Rating = styled(TagText)`
  margin-top: -1px;
`;

export const EpisodeNumberWrapper = styled(TagWrapper)`
  background-color: ${props => props.theme.tertiaryColor}d9;
  top: 2px;
  right: 2px;
`;

export const EpisodeNumber = styled(TagText)``;

export const Details = styled.View`
  padding: 5px 4px;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${props => props.theme.textColor};
  font-size: 11px;
  text-align: left;
`;

export const ReleaseTime = styled.Text`
  color: ${props => props.theme.textColor}b3;
  font-size: 9px;
  text-align: right;
  margin-top: 3px;
`;

export const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: borderRadiusValue,
    borderTopRightRadius: borderRadiusValue,
    aspectRatio: 0.75,
    flex: 1,
  },
});
