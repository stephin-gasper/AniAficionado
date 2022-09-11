import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Wrapper = styled.View`
  background-color: #d62839;
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

export const Title = styled.Text`
  color: #fffade;
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
