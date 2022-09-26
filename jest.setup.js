import React from 'react';
import {Image as MockImage} from 'react-native';
import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components/native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-fast-image', () => props => <MockImage {...props} />);
