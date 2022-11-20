import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  background-color: ${props => props.theme.overlayColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  spinner: {
    width: 140,
    height: 140,
  },
});
