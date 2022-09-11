import {View as MockView, InteractionManager} from 'react-native';
import React from 'react';
import {render, act} from 'test/test-utils';
import {getLatestEpisodes} from 'services/anime';

import Home from './Home';

const mockUseFocusEffect = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useFocusEffect: (params) => mockUseFocusEffect(params),
}));

jest.mock('services/anime');

jest.mock('./cards', () => (props) => (
  <MockView testID="animeCard" {...props} />
));

describe('<Home />', () => {
  it('should call api to get latest anime episodes', async () => {
    const {getAllByTestId} = render(<Home />);

    await act(async () => {
      mockUseFocusEffect.mock.calls[0][0]();
    });

    expect(getAllByTestId('animeCard')).toHaveLength(2);
    expect(getLatestEpisodes).toHaveBeenCalledTimes(1);
    expect(getLatestEpisodes).toHaveBeenCalledWith();
  });

  it('should render correctly', async () => {
    const container = render(<Home />);

    await act(async () => {
      mockUseFocusEffect.mock.calls[0][0]();
    });

    expect(container).toMatchSnapshot();
    expect(getLatestEpisodes).toHaveBeenCalledTimes(1);
  });

  it('should cancel interaction manager on unmount', async () => {
    render(<Home />);

    const mockCancel = jest.fn();
    jest
      .spyOn(InteractionManager, 'runAfterInteractions')
      .mockReturnValueOnce({cancel: () => mockCancel()});
    let useFocusEffectCallbackInstance = jest.fn();
    await act(async () => {
      useFocusEffectCallbackInstance = mockUseFocusEffect.mock.calls[0][0]();
    });

    await act(async () => {
      useFocusEffectCallbackInstance();
    });

    expect(mockCancel).toHaveBeenCalledTimes(1);
  });

  it('should some text when api return empty response', async () => {
    const {getByTestId} = render(<Home />);

    getLatestEpisodes.mockResolvedValueOnce([]);
    await act(async () => {
      mockUseFocusEffect.mock.calls[0][0]();
    });

    expect(getByTestId('noResponseText').props.children).toBe(
      "No anime's to show, please retry",
    );
    expect(getLatestEpisodes).toHaveBeenCalledTimes(1);
  });

  it('should loader text until api respond', async () => {
    const {getByTestId, queryByTestId} = render(<Home />);

    expect(getByTestId('loaderText').props.children).toBe('Loading...');

    await act(async () => {
      mockUseFocusEffect.mock.calls[0][0]();
    });

    expect(queryByTestId('loaderText')).toBeNull();
    expect(getLatestEpisodes).toHaveBeenCalledTimes(1);
  });
});
