import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'styled-components/native';

import {ButtonContainer, ButtonText, ButtonWrapper} from './Button.style';

const Button = ({
  onPress,
  children,
  iconComponent,
  iconName,
  iconSize,
  style,
  labelStyle,
}) => {
  const theme = useTheme();

  const Icon = iconComponent;

  return (
    <ButtonWrapper>
      <ButtonContainer
        testID="buttonContainer"
        onPress={onPress}
        style={style}
        activeOpacity={0.8}>
        <If condition={iconName}>
          <Icon
            testID="icon"
            name={iconName}
            size={iconSize}
            color={theme.textColor}
          />
        </If>
        <ButtonText testID="buttonText" style={labelStyle}>
          {children}
        </ButtonText>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  iconComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  style: PropTypes.shape({}),
  labelStyle: PropTypes.shape({}),
};

Button.defaultProps = {
  onPress: undefined,
  iconComponent: undefined,
  iconName: undefined,
  iconSize: 15,
  style: {},
  labelStyle: {},
};

export default Button;
