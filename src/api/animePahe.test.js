import axios from 'axios';
import {fetchLatestEpisodes} from './animePahe';
import {ANIME_PAHE_LATEST_EPISODES_RESPONSE} from './animePahe.mock';

describe('tests for animePahe related apis', () => {
  const animePaheBaseUrl = 'https://animepahe.com/api/';

  it('should fetch latest episodes with default page number', async () => {
    const mockAxiosGet = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce(ANIME_PAHE_LATEST_EPISODES_RESPONSE);
    await expect(fetchLatestEpisodes()).resolves.toStrictEqual(
      ANIME_PAHE_LATEST_EPISODES_RESPONSE.data.data,
    );
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(animePaheBaseUrl, {
      params: {m: 'airing', page: 1},
      timeout: 60000,
    });
  });

  it('should fetch latest episodes with custom page number', async () => {
    const mockAxiosGet = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce(ANIME_PAHE_LATEST_EPISODES_RESPONSE);
    await expect(fetchLatestEpisodes({page: 2})).resolves.toStrictEqual(
      ANIME_PAHE_LATEST_EPISODES_RESPONSE.data.data,
    );
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(animePaheBaseUrl, {
      params: {m: 'airing', page: 2},
      timeout: 60000,
    });
  });
});
