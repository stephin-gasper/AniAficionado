import React from 'react';
import {render} from '@testing-library/react-native';

import Cards from './Cards';

describe('<Cards />', () => {
  const defaultProps = {
    imageUrl: 'https://www.sample-img.com',
    title: 'Sample title',
  };

  it('should render correctly', () => {
    expect(render(<Cards {...defaultProps} />)).toMatchSnapshot();
  });
});
