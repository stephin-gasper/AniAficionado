import axios from 'axios';
import {
  fetchAllRecentEpisodes,
  fetchHomepageHtml,
  fetchLatestDubbedEpisodes,
  fetchLatestSubbedEpisodes,
} from './animixplay';
import {
  ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE,
  ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE,
  ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE,
  ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE,
} from './animixplay.mock';

describe('tests for animixplay related apis', () => {
  const animixplayBaseUrl = 'https://animixplay.to';
  const timeout = 20000;
  const searchApiURL = `${animixplayBaseUrl}/api/search`;
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
      fetchLatestSubbedEpisodes({
        episodeReleaseDateAndTime: '2022-10-05 14:45:04',
      }),
    ).resolves.toStrictEqual(ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE.data);
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      searchApiURL,
      'seasonal=2022-10-05%2014%3A45%3A04',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });

  it('should fetch latest dubbed episodes with default episodeReleaseDateAndTime', async () => {
    const mockAxiosPost = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce(
        ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE,
      );
    await expect(fetchLatestDubbedEpisodes()).resolves.toStrictEqual(
      ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE.data,
    );
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      searchApiURL,
      'seasonaldub=3020-05-06%2000%3A00%3A00',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });

  it('should fetch latest dubbed episodes with custom episodeReleaseDateAndTime', async () => {
    const mockAxiosPost = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce(
        ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE,
      );
    await expect(
      fetchLatestDubbedEpisodes({
        episodeReleaseDateAndTime: '2022-10-29 23:35:05',
      }),
    ).resolves.toStrictEqual(
      ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE.data,
    );
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      searchApiURL,
      'seasonaldub=2022-10-29%2023%3A35%3A05',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });

  it('should fetch all recent episodes with default episodeReleaseDateAndTime', async () => {
    const mockAxiosPost = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce(ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE);
    await expect(fetchAllRecentEpisodes()).resolves.toStrictEqual(
      ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE.data,
    );
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      `${animixplayBaseUrl}/a/XsWgdGCnKJfNvDFAM28EV`,
      'recent=3020-05-06%2000%3A00%3A00',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });

  it('should fetch all recent episodes with custom episodeReleaseDateAndTime', async () => {
    const mockAxiosPost = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce(ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE);
    await expect(
      fetchAllRecentEpisodes({
        episodeReleaseDateAndTime: '2022-10-29 23:35:05',
      }),
    ).resolves.toStrictEqual(
      ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE.data,
    );
    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith(
      searchApiURL,
      'recent=2022-10-29%2023%3A35%3A05',
      {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      },
    );
  });
});
