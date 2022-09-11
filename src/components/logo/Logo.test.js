import React from 'react';
import {render} from 'test/test-utils';

import Logo from './Logo';

describe('<Logo />', () => {
  it('should render correctly', () => {
    expect(render(<Logo />)).toMatchSnapshot();
  });
});
