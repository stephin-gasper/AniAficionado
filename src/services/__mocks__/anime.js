import {GET_LATEST_EPISODES_RESPONSE} from 'services/anime.mock';

export const getLatestEpisodes = jest.fn(() =>
  Promise.resolve(GET_LATEST_EPISODES_RESPONSE),
);
