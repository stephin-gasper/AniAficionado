import React from 'react';
import {Image as MockImage} from 'react-native';
import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components/native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const FastImage = props => <MockImage {...props} />;
FastImage.resizeMode = {
  stretch: 'stretch',
};
jest.mock('react-native-fast-image', () => FastImage);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => props => (
  <MockImage {...props} />
));

jest.mock('react-native-vector-icons/MaterialIcons', () => props => (
  <MockImage {...props} />
));

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
