import React from 'react';
import {View as MockView} from 'react-native';
import {render} from '@testing-library/react-native';

import App from './App';

jest.mock('screens/home', () => () => <MockView testID="homeContainer" />);

describe('tests for App', () => {
  it('should render component', () => {
    expect(render(<App />)).toMatchSnapshot();
  });

  it('should render home screen', () => {
    const {getByTestId} = render(<App />);

    expect(getByTestId('homeContainer')).toBeDefined();
  });

  it('should render header', () => {
    const {getByTestId} = render(<App />);

    expect(getByTestId('header')).toBeDefined();
  });
});
