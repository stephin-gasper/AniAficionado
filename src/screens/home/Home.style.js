import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.primaryColor};
  flex: 1;
`;

export const ContentWrapper = styled.View`
  flex-grow: 1;
  padding: 5px 10px 0;
`;

export const CardWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -2.5px;
`;

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  showMoreResultButton: {
    paddingLeft: 20,
    paddingTop: 10.5,
    paddingBottom: 10.5,
    marginBottom: 20,
  },
});
