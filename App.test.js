import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import App from './App';

describe('tests for App', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('sampleTestId')).toBeDefined();
  });
});
