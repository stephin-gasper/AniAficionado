import React from 'react';
import {Dimensions} from 'react-native';
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

  it('should change featured image width when dimensions change', () => {
    const {getByTestId, update} = render(<Cards {...defaultProps} />);

    expect(getByTestId('featuredImage').props.width).toBe(750);

    const mockDimensionGet = jest
      .spyOn(Dimensions, 'get')
      .mockReturnValueOnce({width: 414});
    update(<Cards {...defaultProps} />);

    expect(getByTestId('featuredImage').props.width).toBe(414);
    expect(mockDimensionGet).toHaveBeenCalledTimes(1);
  });
});
