import * as cheerio from 'cheerio';
import {fetchHomepageHtml, fetchLatestSubbedEpisodes} from 'api/animixplay';
import {ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE} from 'api/animixplay.mock';

import Anime from './anime';
import {
  INITIAL_LATEST_SUBBED_EPISODES_RESPONSE,
  LATEST_SUBBED_EPISODES_RESPONSE,
} from './anime.mock';

jest.mock('api/animixplay');

describe('tests for anime related functions', () => {
  describe('getInitialLatestSubbedEpisodes function', () => {
    beforeAll(() => {
      jest
        .spyOn(Date, 'now')
        .mockReturnValue(Number(new Date('2022-09-19 00:00:00')));
    });
    it('should make fetchHomepageHtml call and return initial subbed episodes list', async () => {
      const loadSpy = jest.spyOn(cheerio, 'load');
      const anime = new Anime();
      await expect(
        anime.getInitialLatestSubbedEpisodes(),
      ).resolves.toStrictEqual(INITIAL_LATEST_SUBBED_EPISODES_RESPONSE);
      expect(fetchHomepageHtml).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledWith(
        ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE.data,
        {
          _useHtmlParser2: true,
        },
      );
    });

    it('should make fetchHomepageHtml call and return empty list when html element is not found', async () => {
      const loadSpy = jest.spyOn(cheerio, 'load');
      fetchHomepageHtml.mockResolvedValueOnce(`
        <!DOCTYPE html>
          <html lang="en">
          <body></body>
        </html>
      `);
      const anime = new Anime();
      await expect(
        anime.getInitialLatestSubbedEpisodes(),
      ).resolves.toStrictEqual([]);
      expect(fetchHomepageHtml).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledTimes(1);
    });

    it('should make fetchHomepageHtml call and return empty list when api call fails', async () => {
      const loadSpy = jest.spyOn(cheerio, 'load');
      fetchHomepageHtml.mockResolvedValueOnce(null);
      const anime = new Anime();
      await expect(
        anime.getInitialLatestSubbedEpisodes(),
      ).resolves.toStrictEqual([]);
      expect(fetchHomepageHtml).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledTimes(0);
    });
  });

  describe('getLatestSubbedEpisodes function', () => {
    beforeAll(() => {
      jest
        .spyOn(Date, 'now')
        .mockReturnValue(Number(new Date('2022-11-19 00:00:00')));
    });
    it('should make fetchLatestSubbedEpisodes call and return subbed episodes list', async () => {
      const anime = new Anime();
      await anime.getInitialLatestSubbedEpisodes();
      await expect(anime.getLatestSubbedEpisodes()).resolves.toStrictEqual(
        LATEST_SUBBED_EPISODES_RESPONSE,
      );
      expect(fetchLatestSubbedEpisodes).toHaveBeenCalledWith({
        episodeReleaseDateAndTime: '2022-09-17 17:15:04',
      });
      await anime.getLatestSubbedEpisodes();
      expect(fetchLatestSubbedEpisodes).toHaveBeenCalledTimes(2);
      expect(fetchLatestSubbedEpisodes).toHaveBeenNthCalledWith(2, {
        episodeReleaseDateAndTime: '2022-10-08 02:15:04',
      });
    });

    it('should make fetchLatestSubbedEpisodes call and return error when api call fails', async () => {
      const anime = new Anime();
      fetchLatestSubbedEpisodes.mockResolvedValueOnce(null);
      await expect(anime.getLatestSubbedEpisodes()).rejects.toStrictEqual(
        Error('No response'),
      );
      expect(fetchLatestSubbedEpisodes).toHaveBeenCalledTimes(1);
    });
  });
});
