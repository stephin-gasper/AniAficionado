import {
  INITIAL_LATEST_SUBBED_EPISODES_RESPONSE,
  LATEST_SUBBED_EPISODES_RESPONSE,
} from 'services/anime.mock';

export const getInitialLatestSubbedEpisodes = jest.fn(() =>
  Promise.resolve(INITIAL_LATEST_SUBBED_EPISODES_RESPONSE),
);

export const getLatestSubbedEpisodes = jest.fn(() =>
  Promise.resolve(LATEST_SUBBED_EPISODES_RESPONSE),
);
