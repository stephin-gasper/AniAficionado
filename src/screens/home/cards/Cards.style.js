import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Wrapper = styled.View`
  background-color: ${(props) => props.theme.secondaryColor};
  margin-bottom: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const FeaturedImageWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const FeaturedImageOverlay = styled.View`
  background-color: ${(props) => props.theme.primaryColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  opacity: 0.3;
`;

export const EpisodeNumber = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 10px 20px;
`;

export const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'contain',
  },
});
