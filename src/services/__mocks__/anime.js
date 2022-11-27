import {
  INITIAL_LATEST_SUBBED_EPISODES_RESPONSE,
  LATEST_SUBBED_EPISODES_RESPONSE,
} from 'services/anime.mock';

export const mockGetInitialLatestSubbedEpisodes = jest.fn(() =>
  Promise.resolve(INITIAL_LATEST_SUBBED_EPISODES_RESPONSE),
);

export const mockGetLatestSubbedEpisodes = jest.fn(() =>
  Promise.resolve(LATEST_SUBBED_EPISODES_RESPONSE),
);

const anime = jest.fn().mockImplementation(() => {
  return {
    getInitialLatestSubbedEpisodes: mockGetInitialLatestSubbedEpisodes,
    getLatestSubbedEpisodes: mockGetLatestSubbedEpisodes,
  };
});

export default anime;
