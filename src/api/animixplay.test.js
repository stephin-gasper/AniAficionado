import axios from 'axios';
import {fetchHomepageHtml, fetchLatestSubbedEpisodes} from './animixplay';
import {
  ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE,
  ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE,
} from './animixplay.mock';

describe('tests for animixplay related apis', () => {
  const animixplayBaseUrl = 'https://animixplay.to';
  const timeout = 20000;
  const formUrlencodedContentTypeHeader = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  it('should fetch homepage html', async () => {
    const mockAxiosGet = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce(ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE);
    await expect(fetchHomepageHtml()).resolves.toStrictEqual(
      ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE.data,
    );
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(animixplayBaseUrl, {
      timeout,
    });
  });

  it('should fetch latest subbed episodes', async () => {
    const mockAxiosPost = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce(ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE);
    await expect(
      fetchLatestSubbedEpisodes({episodeReleaseDate: '2022-10-05 14:45:04'}),
    ).resolves.toStrictEqual(ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE.data);
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      `${animixplayBaseUrl}/api/search`,
      'seasonal=2022-10-05%2014%3A45%3A04',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });
});
