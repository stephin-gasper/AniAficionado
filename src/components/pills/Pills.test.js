import React from 'react';
import {View as MockView} from 'react-native';
import {render, act, fireEvent} from 'test/test-utils';

import Pills from './Pills';

jest.mock('components/animated-background-color-view', () => props => (
  <MockView {...props} />
));

describe('<Pills />', () => {
  const mockOnPillPress = jest.fn();
  const defaultProps = {
    list: ['pill1', 'pill2'],
    onPillPress: mockOnPillPress,
  };

  it('should render correctly', () => {
    expect(render(<Pills {...defaultProps} />)).toMatchSnapshot();
  });

  it('should change active pill on click of pill', async () => {
    const {getByTestId} = render(<Pills {...defaultProps} />);

    expect(getByTestId('pill-0').props.activeColor).toBe('#352462');
    expect(getByTestId('pill-1').props.activeColor).toBe('#9381b9');

    await act(async () => {
      fireEvent(getByTestId('pill-text-1'), 'onPress');
    });

    expect(getByTestId('pill-0').props.activeColor).toBe('#9381b9');
    expect(getByTestId('pill-1').props.activeColor).toBe('#352462');

    await act(async () => {
      fireEvent(getByTestId('pill-text-0'), 'onPress');
    });

    expect(getByTestId('pill-0').props.activeColor).toBe('#352462');
    expect(getByTestId('pill-1').props.activeColor).toBe('#9381b9');

    expect(mockOnPillPress).toHaveBeenCalledTimes(2);
  });
});
