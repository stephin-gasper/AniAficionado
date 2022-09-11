import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from 'constants/theme';

// eslint-disable-next-line react/prop-types
const WrapWithProvider = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, {wrapper: WrapWithProvider, ...options});

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react-native';

// Override render method
export {customRender as render};
