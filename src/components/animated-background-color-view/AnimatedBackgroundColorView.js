import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const AnimatedBackgroundColorView = ({
  children,
  style,
  initialColor,
  activeColor,
}) => {
  const backgroundColor = useSharedValue(initialColor);

  const animatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(backgroundColor.value, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      }),
    }),
    [activeColor],
  );

  useEffect(() => {
    if (backgroundColor.value !== activeColor) {
      backgroundColor.value = activeColor;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColor]);

  return (
    <Animated.View
      testID="animatedBackgroundColorView"
      style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

AnimatedBackgroundColorView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  initialColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
};

AnimatedBackgroundColorView.defaultProps = {
  style: {},
};

export default AnimatedBackgroundColorView;
