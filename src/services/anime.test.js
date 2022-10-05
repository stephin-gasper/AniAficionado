import * as cheerio from 'cheerio';
import {fetchHomepageHtml} from 'api/animixplay';
import {ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE} from 'api/animixplay.mock';

import {getInitialLatestSubbedEpisodes} from './anime';
import {INITIAL_LATEST_SUBBED_EPISODES_RESPONSE} from './anime.mock';

jest.mock('api/animixplay');

describe('tests for anime related functions', () => {
  beforeAll(() => {
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Number(new Date('2022-09-19 00:00:00')));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make homepage html call and return initial subbed episodes list', async () => {
    const loadSpy = jest.spyOn(cheerio, 'load');
    await expect(getInitialLatestSubbedEpisodes()).resolves.toStrictEqual(
      INITIAL_LATEST_SUBBED_EPISODES_RESPONSE,
    );
    expect(fetchHomepageHtml).toHaveBeenCalledTimes(1);
    expect(loadSpy).toHaveBeenCalledTimes(1);
    expect(loadSpy).toHaveBeenCalledWith(
      ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE.data,
      {
        _useHtmlParser2: true,
      },
    );
  });

  it('should make homepage html call and return empty list when api call fails', async () => {
    const loadSpy = jest.spyOn(cheerio, 'load');
    fetchHomepageHtml.mockRejectedValueOnce(new Error('error'));
    await expect(getInitialLatestSubbedEpisodes()).resolves.toStrictEqual([]);

    expect(fetchHomepageHtml).toHaveBeenCalledTimes(1);
    expect(loadSpy).toHaveBeenCalledTimes(0);
  });
});
