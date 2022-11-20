import React from 'react';
import {render} from 'test/test-utils';

import Spinner from './Spinner';

describe('<Spinner />', () => {
  it('should render correctly', () => {
    expect(render(<Spinner />)).toMatchSnapshot();
  });
});
