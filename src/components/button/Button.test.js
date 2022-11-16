import React from 'react';
import {View as MockView} from 'react-native';
import {render} from 'test/test-utils';

import Button from './Button';

describe('<Button />', () => {
  const sampleText = 'sample';
  it('should render correctly', () => {
    expect(render(<Button>{sampleText}</Button>)).toMatchSnapshot();
  });

  it('should render icon', () => {
    expect(
      render(
        <Button iconComponent={MockView} iconName="someIcon">
          {sampleText}
        </Button>,
      ),
    ).toMatchSnapshot();
  });

  it('should override size of icon when iconSize is present', () => {
    const {getByTestId} = render(
      <Button iconComponent={MockView} iconName="someIcon" iconSize={20}>
        {sampleText}
      </Button>,
    );

    expect(getByTestId('icon').props.size).toBe(20);
  });

  it('should add style to container when style props is present', () => {
    const {getByTestId} = render(
      <Button style={{marginTop: 20}}>{sampleText}</Button>,
    );

    expect(getByTestId('buttonContainer')).toHaveStyleRule('marginTop', 20);
  });

  it('should add style to text when labelStyle props is present', () => {
    const {getByTestId} = render(
      <Button labelStyle={{marginTop: 20}}>{sampleText}</Button>,
    );

    expect(getByTestId('buttonText')).toHaveStyleRule('marginTop', 20);
  });
});
