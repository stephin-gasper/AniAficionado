import React from 'react';
import {render} from 'test/test-utils';

import Cards from './Cards';

describe('<Cards />', () => {
  const defaultProps = {
    imageUrl: 'https://www.sample-img.com',
    title: 'Sample title',
    latestEpisodeNumber: '2',
    rating: '9',
    totalEpisodes: '12',
    releaseTime: '1 minute ago',
  };

  it('should render correctly', () => {
    expect(render(<Cards {...defaultProps} />)).toMatchSnapshot();
  });
});
