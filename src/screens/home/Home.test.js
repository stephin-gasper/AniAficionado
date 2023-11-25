import {View as MockView, InteractionManager} from 'react-native';
import React from 'react';
import {render, act, fireEvent} from 'test/test-utils';
import Anime, {
  // eslint-disable-next-line import/named
  mockGetInitialLatestSubbedEpisodes,
  // eslint-disable-next-line import/named
  mockGetLatestSubbedEpisodes,
} from 'services/anime';

import Home from './Home';

const mockUseFocusEffect = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useFocusEffect: params => mockUseFocusEffect(params),
}));

jest.mock('services/anime');

jest.mock('components/pills/Pills', () => props => (
  <MockView testID="pills" {...props} />
));

jest.mock('components/button/Button', () => props => (
  <MockView testID="button" {...props} />
));

jest.mock('components/spinner/Spinner', () => props => (
  <MockView testID="spinner" {...props} />
));

jest.mock('./cards', () => props => <MockView testID="animeCard" {...props} />);

describe('<Home />', () => {
  it('should cancel interaction manager on unmount', async () => {
    const mockCancel = jest.fn();
    jest
      .spyOn(InteractionManager, 'runAfterInteractions')
      .mockReturnValueOnce({cancel: () => mockCancel()});
    // let useFocusEffectCallbackInstance = jest.fn();
    const {rerender, unmount} = render(<Home />);

    await act(async () => {
      rerender(<Home />);
    });

    await act(async () => {
      unmount();
    });

    expect(mockCancel).toHaveBeenCalledTimes(1);
  });

  describe('tests for initial subbed episodes load', () => {
    it('should render correctly', async () => {
      const {rerender, toJSON} = await render(<Home />);

      await act(async () => {
        rerender(<Home />);
      });

      expect(Anime).toHaveBeenCalledTimes(1);
      expect(toJSON()).toMatchSnapshot();
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });

    it('should call api to get latest anime episodes', async () => {
      const {rerender, getAllByTestId} = await render(<Home />);

      await act(async () => {
        rerender(<Home />);
      });

      expect(getAllByTestId('animeCard')).toHaveLength(3);
      expect(Anime).toHaveBeenCalledTimes(1);
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledWith();
    });

    it('should show some text when api return empty response', async () => {
      const {rerender, getByTestId} = render(<Home />);

      mockGetInitialLatestSubbedEpisodes.mockResolvedValueOnce([]);
      await act(async () => {
        rerender(<Home />);
      });

      expect(getByTestId('noResponseText').props.children).toBe(
        "No anime's to show, please retry",
      );
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });

    it('should show spinner until api responds', async () => {
      const {rerender, getByTestId, queryByTestId} = render(<Home />);

      expect(getByTestId('spinner')).toBeDefined();
      expect(queryByTestId('cardWrapper')).toBeNull();
      expect(queryByTestId('scrollView')).toBeNull();
      expect(queryByTestId('pills')).toBeNull();

      await act(async () => {
        rerender(<Home />);
      });

      expect(queryByTestId('spinner')).toBeNull();
      expect(getByTestId('cardWrapper')).toBeDefined();
      expect(getByTestId('scrollView')).toBeDefined();
      expect(getByTestId('pills')).toBeDefined();
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });
  });

  describe('tests for loading more latest subbed animes', () => {
    it('should call getLatestSubbedEpisodes when show more results button is clicked', async () => {
      const {rerender, getAllByTestId, getByTestId, toJSON} = await render(
        <Home />,
      );

      await act(async () => {
        rerender(<Home />);
      });

      expect(getAllByTestId('animeCard')).toHaveLength(3);

      await act(async () => {
        fireEvent(getByTestId('showMoreResultsButton'), 'onPress');
      });

      expect(getAllByTestId('animeCard')).toHaveLength(6);
      expect(Anime).toHaveBeenCalledTimes(1);
      expect(mockGetLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
      expect(mockGetLatestSubbedEpisodes).toHaveBeenCalledWith();
      expect(toJSON()).toMatchSnapshot();
    });

    it('should hide show more results button when getLatestSubbedEpisodes responds with canLoadMoreResults:false', async () => {
      const {rerender, getAllByTestId, getByTestId, queryByTestId} =
        await render(<Home />);

      await act(async () => {
        rerender(<Home />);
      });

      mockGetLatestSubbedEpisodes.mockResolvedValueOnce({
        list: [],
        canLoadMoreResults: false,
      });
      await act(async () => {
        fireEvent(getByTestId('showMoreResultsButton'), 'onPress');
      });

      expect(getAllByTestId('animeCard')).toHaveLength(3);
      expect(queryByTestId('showMoreResultsButton')).toBeNull();
    });

    it('should loader text until api responds', async () => {
      const {rerender, getByTestId, queryByTestId} = await render(<Home />);

      await act(async () => {
        rerender(<Home />);
      });

      expect(queryByTestId('spinner')).toBeNull();

      let promiseResolver;
      mockGetLatestSubbedEpisodes.mockReturnValueOnce(
        new Promise(resolve => {
          promiseResolver = resolve;
        }),
      );
      await act(async () => {
        fireEvent(getByTestId('showMoreResultsButton'), 'onPress');
      });

      expect(getByTestId('spinner')).toBeDefined();
      expect(getByTestId('cardWrapper')).toBeDefined();
      expect(getByTestId('scrollView')).toBeDefined();
      expect(getByTestId('pills')).toBeDefined();

      await act(async () => {
        await promiseResolver({list: [], canLoadMoreResults: false});
      });

      expect(queryByTestId('spinner')).toBeNull();
    });
  });
});
