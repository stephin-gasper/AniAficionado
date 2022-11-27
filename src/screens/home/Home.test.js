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

  describe('tests for initial subbed episodes load', () => {
    it('should render correctly', async () => {
      const container = render(<Home />);

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(Anime).toHaveBeenCalledTimes(1);
      expect(container).toMatchSnapshot();
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });

    it('should call api to get latest anime episodes', async () => {
      const {getAllByTestId} = render(<Home />);

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(getAllByTestId('animeCard')).toHaveLength(3);
      expect(Anime).toHaveBeenCalledTimes(1);
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledWith();
    });

    it('should show some text when api return empty response', async () => {
      const {getByTestId} = render(<Home />);

      mockGetInitialLatestSubbedEpisodes.mockResolvedValueOnce([]);
      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(getByTestId('noResponseText').props.children).toBe(
        "No anime's to show, please retry",
      );
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });

    it('should spinner until api responds', async () => {
      const {getByTestId, queryByTestId} = render(<Home />);

      expect(getByTestId('spinner')).toBeDefined();
      expect(queryByTestId('cardWrapper')).toBeNull();
      expect(queryByTestId('scrollView')).toBeNull();
      expect(queryByTestId('pills')).toBeNull();

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(queryByTestId('spinner')).toBeNull();
      expect(getByTestId('cardWrapper')).toBeDefined();
      expect(getByTestId('scrollView')).toBeDefined();
      expect(getByTestId('pills')).toBeDefined();
      expect(mockGetInitialLatestSubbedEpisodes).toHaveBeenCalledTimes(1);

      let promiseResolver;
      mockGetInitialLatestSubbedEpisodes.mockReturnValueOnce(
        new Promise(resolve => {
          promiseResolver = resolve;
        }),
      );

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(getByTestId('spinner')).toBeDefined();

      await act(async () => {
        await promiseResolver({list: [], canLoadMoreResults: false});
      });

      expect(queryByTestId('spinner')).toBeNull();
    });
  });

  describe('tests for loading more latest subbed animes', () => {
    it('should call getLatestSubbedEpisodes when show more results button is clicked', async () => {
      const container = render(<Home />);
      const {getAllByTestId, getByTestId} = container;

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
      });

      expect(getAllByTestId('animeCard')).toHaveLength(3);

      await act(async () => {
        fireEvent(getByTestId('showMoreResultsButton'), 'onPress');
      });

      expect(getAllByTestId('animeCard')).toHaveLength(6);
      expect(Anime).toHaveBeenCalledTimes(1);
      expect(mockGetLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
      expect(mockGetLatestSubbedEpisodes).toHaveBeenCalledWith();
      expect(container).toMatchSnapshot();
    });

    it('should hide show more results button when getLatestSubbedEpisodes responds with canLoadMoreResults:false', async () => {
      const {getAllByTestId, getByTestId, queryByTestId} = render(<Home />);

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
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
      const {getByTestId, queryByTestId} = render(<Home />);

      await act(async () => {
        mockUseFocusEffect.mock.calls[0][0]();
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
