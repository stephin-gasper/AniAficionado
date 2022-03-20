import {ANIME_PAHE_LATEST_EPISODES_RESPONSE} from 'api/animePahe.mock';

export const fetchLatestEpisodes = jest.fn(() =>
  Promise.resolve(ANIME_PAHE_LATEST_EPISODES_RESPONSE.data.data),
);
