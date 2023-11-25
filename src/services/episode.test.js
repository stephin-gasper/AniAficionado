import * as cheerio from 'cheerio';
import {fetchEpisodeHtml} from 'api/animixplay';
import {ANIMIXPLAY_EPISODE_HTML_RESPONSE} from 'api/animixplay.mock';

import Episode from './episode';
import {EPISODE_DATA, STREAMING_LINKS} from './episode.mock';

jest.mock('api/animixplay');

describe('tests for episode related functions', () => {
  describe('getDetails function', () => {
    const path = '/v1/example-episode-1';
    it('should make fetchEpisodeHtml call and return object response', async () => {
      const anime = new Episode();
      const loadSpy = jest.spyOn(cheerio, 'load');
      await expect(anime.getDetails(path)).resolves.toStrictEqual(EPISODE_DATA);
      expect(fetchEpisodeHtml).toHaveBeenCalledTimes(1);
      expect(fetchEpisodeHtml).toHaveBeenCalledWith(path);
      expect(loadSpy).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledWith(
        ANIMIXPLAY_EPISODE_HTML_RESPONSE.data,
        {
          _useHtmlParser2: true,
        },
      );
    });

    it('should make fetchEpisodeHtml call and return error when html element is not found', async () => {
      const anime = new Episode();
      const loadSpy = jest.spyOn(cheerio, 'load');
      fetchEpisodeHtml.mockResolvedValueOnce(`
        <!DOCTYPE html>
          <html lang="en">
          <body></body>
        </html>
      `);
      await expect(anime.getDetails(path)).rejects.toStrictEqual(
        Error('No response'),
      );
      expect(fetchEpisodeHtml).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledTimes(1);
    });

    const noScriptResponse = {
      episodesList: [
        {
          isFiller: false,
        },
        {
          isFiller: false,
        },
      ],
    };
    const scriptWithNoMalID = `
      <script>
        var copt = '#gh=gogohd.net'; //#recmanga
        var fillerData = [2];
      </script>
    `;

    const scriptWithNoCopt = `
      <script>
        var malid = '34566';
        var fillerData = [2];
      </script>
    `;
    const scriptWithNoCoptResponse = {malid: '34566'};

    const scriptWithFillerData = `
      <script>
        var malid = '34566';
        var copt = '#gh=gogohd.net'; //#recmanga
      </script>
    `;
    const scriptWithFillerDataResponse = {
      malid: '34566',
      episodesList: [
        {
          isFiller: false,
        },
        {
          isFiller: false,
        },
      ],
    };

    it.each`
      scriptString            | description                                                             | expected
      ${''}                   | ${'default values for malID and goHostName when no scripts is present'} | ${noScriptResponse}
      ${scriptWithNoMalID}    | ${'default values for malID when malID is missing'}                     | ${{}}
      ${scriptWithNoCopt}     | ${'default values for gohostname when copt is missing'}                 | ${scriptWithNoCoptResponse}
      ${scriptWithFillerData} | ${'default values for episodeList when fillerData is missing'}          | ${scriptWithFillerDataResponse}
    `(
      'should make fetchEpisodeHtml call and return response object with $description',
      async ({scriptString, expected}) => {
        const anime = new Episode();
        const loadSpy = jest.spyOn(cheerio, 'load');
        fetchEpisodeHtml.mockResolvedValueOnce(`
        <!DOCTYPE html>
          <html lang="en">
          <body>
            <span class="animetitle">Test</span>
            <span id="epslistplace">
            {"eptotal":2,"0":"//gogohd.net/streaming.php?id=OTc2MzI=&title=Boruto%3A+Naruto+Next+Generations+Episode+1","1":"//gogohd.net/streaming.php?id=OTc3MzA=&title=Boruto%3A+Naruto+Next+Generations+Episode+2"}
            </span>
            <span id="genredata">Action</span>
            <span id="status">Status : Ongoing</span>
            ${scriptString}
          </body>
        </html>
      `);
        await expect(anime.getDetails(path)).resolves.toStrictEqual({
          episodesList: [
            {
              isFiller: false,
            },
            {
              isFiller: true,
            },
          ],
          animetitle: 'Test',
          genres: ['Action'],
          malid: undefined,
          status: 'Ongoing',
          ...expected,
        });
        expect(fetchEpisodeHtml).toHaveBeenCalledTimes(1);
        expect(loadSpy).toHaveBeenCalledTimes(1);
      },
    );

    it('should make fetchEpisodeHtml call and return error when api call fails', async () => {
      const anime = new Episode();
      const loadSpy = jest.spyOn(cheerio, 'load');
      fetchEpisodeHtml.mockResolvedValueOnce(null);
      await expect(anime.getDetails(path)).rejects.toStrictEqual(
        Error('No response'),
      );
      expect(fetchEpisodeHtml).toHaveBeenCalledTimes(1);
      expect(loadSpy).toHaveBeenCalledTimes(0);
    });
  });

  describe('getStreamingLink function', () => {
    const path = '/v1/example-episode-1';
    it('should return streaming link when streamingLinksObj is present', async () => {
      const anime = new Episode();
      await anime.getDetails(path);
      expect(anime.getStreamingLinks({episodeNumber: '1'})).toStrictEqual(
        STREAMING_LINKS,
      );
    });

    it('should return empty streaming link when episodeNumber is invalid', async () => {
      const anime = new Episode();
      await anime.getDetails(path);
      expect(anime.getStreamingLinks({episodeNumber: '91'})).toStrictEqual({
        externalPlayerLink: '',
        internalPlayerLink: undefined,
      });
    });

    it('should return empty streaming link when streamingLinksObj is not present', async () => {
      const anime = new Episode();
      expect(anime.getStreamingLinks({episodeNumber: '91'})).toStrictEqual({
        externalPlayerLink: '',
        internalPlayerLink: undefined,
      });
    });

    it('should return unparsed streaming link when string matching is invalid', async () => {
      const anime = new Episode();
      const link = '//gogohd.net/player.php?id=test';
      fetchEpisodeHtml.mockResolvedValueOnce(`
        <!DOCTYPE html>
          <html lang="en">
          <body>
            <span class="animetitle">Test</span>
            <span id="epslistplace">
            {"eptotal":1,"0":"${link}"}
            </span>
            <span id="genredata">Action</span>
            <span id="status">Status : Ongoing</span>
            <script>
              var malid = '34566';
              var copt = '#gh=gogohd.net'; //#recmanga
            </script>
          </body>
        </html>
      `);
      await anime.getDetails(path);
      expect(anime.getStreamingLinks({episodeNumber: '1'})).toStrictEqual({
        externalPlayerLink: link,
        internalPlayerLink: undefined,
      });
    });

    it('should return unparsed streaming link with default gohostname when copt is missing', async () => {
      const anime = new Episode();
      const link = '//gogoplay.io/player.php?id=test';
      fetchEpisodeHtml.mockResolvedValueOnce(`
        <!DOCTYPE html>
          <html lang="en">
          <body>
            <span class="animetitle">Test</span>
            <span id="epslistplace">
            {"eptotal":1,"0":"${link}"}
            </span>
            <span id="genredata">Action</span>
            <span id="status">Status : Ongoing</span>
            <script>
              var malid = '34566';
            </script>
          </body>
        </html>
      `);
      await anime.getDetails(path);
      expect(anime.getStreamingLinks({episodeNumber: '1'})).toStrictEqual({
        externalPlayerLink: link,
        internalPlayerLink: undefined,
      });
    });
  });
});
