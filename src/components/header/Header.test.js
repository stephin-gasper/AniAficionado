import React from 'react';
import {View as MockView} from 'react-native';
import {render} from 'test/test-utils';

import Header from './Header';

jest.mock('../logo', () => (props) => <MockView testID="logo" {...props} />);

describe('<Header />', () => {
  it('should render correctly', () => {
    expect(render(<Header />)).toMatchSnapshot();
  });
});
