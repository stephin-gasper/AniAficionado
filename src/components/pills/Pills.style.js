import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import AnimatedBackgroundColorView from 'components/animated-background-color-view';

export const Pill = styled(AnimatedBackgroundColorView)`
  border-radius: 20px;
  margin: 0 3px;
`;
export const PillText = styled.Text`
  color: ${props => props.theme.textColor};
  padding: 6px 15px;
`;

export const styles = StyleSheet.create({
  contentContainer: {marginHorizontal: -3, marginBottom: 20},
});
