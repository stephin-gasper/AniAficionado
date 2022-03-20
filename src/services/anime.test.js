import {fetchLatestEpisodes} from 'api/animePahe';

import {getLatestEpisodes} from './anime';
import {GET_LATEST_EPISODES_RESPONSE} from './anime.mock';

jest.mock('api/animePahe');

describe('tests for anime related functions', () => {
  it('should make latest episodes call with no page number and return episodes list', async () => {
    await expect(getLatestEpisodes()).resolves.toStrictEqual(
      GET_LATEST_EPISODES_RESPONSE,
    );
    expect(fetchLatestEpisodes).toHaveBeenCalledTimes(1);
    expect(fetchLatestEpisodes).toHaveBeenCalledWith({page: undefined});
  });

  it('should make latest episodes call with custom page number and return episodes list', async () => {
    await expect(getLatestEpisodes({page: 2})).resolves.toStrictEqual(
      GET_LATEST_EPISODES_RESPONSE,
    );
    expect(fetchLatestEpisodes).toHaveBeenCalledTimes(1);
    expect(fetchLatestEpisodes).toHaveBeenCalledWith({page: 2});
  });
});
