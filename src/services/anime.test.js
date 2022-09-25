import * as cheerio from 'cheerio';
import {fetchHomepageHtml} from 'api/animixplay';
import {ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE} from 'api/animixplay.mock';

import {getInitialLatestSubbedEpisodes} from './anime';
import {GET_INITIAL_LATEST_SUBBED_EPISODES_RESPONSE} from './anime.mock';

jest.mock('api/animixplay');

describe('tests for anime related functions', () => {
  it('should make homepage html call and return initial subbed episodes list', async () => {
    const loadSpy = jest.spyOn(cheerio, 'load');
    await expect(getInitialLatestSubbedEpisodes()).resolves.toStrictEqual(
      GET_INITIAL_LATEST_SUBBED_EPISODES_RESPONSE,
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
});
