import React from 'react';
import {View as MockView} from 'react-native';
import {render} from 'test/test-utils';
import {
  withReanimatedTimer,
  advanceAnimationByTime,
  getAnimatedStyle,
} from 'react-native-reanimated/lib/reanimated2/jestUtils';

import AnimatedBackgroundColorView from './AnimatedBackgroundColorView';

describe('<AnimatedBackgroundColorView />', () => {
  const defaultProps = {
    initialColor: '#ffffff',
    activeColor: '#ffffff',
  };
  const RenderedComponent = props => (
    <AnimatedBackgroundColorView {...defaultProps} {...props}>
      <MockView testID="childComponent" />
    </AnimatedBackgroundColorView>
  );

  it('should render correctly', () => {
    withReanimatedTimer(() => {
      expect(render(<RenderedComponent />)).toMatchSnapshot();
    });
  });

  it('should additional style when style prop is present', () => {
    withReanimatedTimer(async () => {
      expect(
        render(<RenderedComponent style={{width: 100}} />),
      ).toMatchSnapshot();
    });
  });

  it('should change background color when activeColor changes', () => {
    withReanimatedTimer(() => {
      const {getByTestId, update} = render(<RenderedComponent />);

      const animatedView = getByTestId('animatedBackgroundColorView');
      expect(getAnimatedStyle(animatedView).backgroundColor).toBe('#ffffff');

      update(<RenderedComponent activeColor="#000000" />);

      // middle animation state
      advanceAnimationByTime(500);
      expect(getAnimatedStyle(animatedView).backgroundColor).toBe(
        'rgba(7, 7, 7, 1)',
      );

      // end animation state
      advanceAnimationByTime(600);
      expect(getAnimatedStyle(animatedView).backgroundColor).toBe(
        'rgba(0, 0, 0, 1)',
      );
    });
  });
});
