import axios from 'axios';
import {
  fetchAllRecentEpisodes,
  fetchHomepageHtml,
  fetchLatestDubbedEpisodes,
  fetchLatestMovies,
  fetchLatestSubbedEpisodes,
  fetchPopularEpisodes,
  fetchEpisodeHtml,
  getAnimixplayBaseUrl,
} from './animixplay';
import {
  ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE,
  ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE,
  ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE,
  ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_LATEST_MOVIES_INITIAL_RESPONSE,
  ANIMIXPLAY_LATEST_MOVIES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_LATEST_POPULAR_EPISODES_INITIAL_RESPONSE,
  ANIMIXPLAY_LATEST_POPULAR_EPISODES_LOAD_MORE_RESPONSE,
  ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE,
  ANIMIXPLAY_EPISODE_HTML_RESPONSE,
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

  describe('fetchLatestDubbedEpisodes function', () => {
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
  });

  describe('fetchAllRecentEpisodes function', () => {
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
        .mockResolvedValueOnce(
          ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE,
        );
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

  describe('fetchLatestMovies function', () => {
    it('should fetch latest movies with default id', async () => {
      const mockAxiosPost = jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce(ANIMIXPLAY_LATEST_MOVIES_INITIAL_RESPONSE);
      await expect(fetchLatestMovies()).resolves.toStrictEqual(
        ANIMIXPLAY_LATEST_MOVIES_INITIAL_RESPONSE.data,
      );
      expect(mockAxiosPost).toHaveBeenCalledTimes(1);
      expect(mockAxiosPost).toHaveBeenCalledWith(
        searchApiURL,
        'movie=99999999',
        {
          headers: formUrlencodedContentTypeHeader,
          timeout,
        },
      );
    });

    it('should fetch latest movies with custom id', async () => {
      const mockAxiosPost = jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce(ANIMIXPLAY_LATEST_MOVIES_LOAD_MORE_RESPONSE);
      await expect(
        fetchLatestMovies({
          id: 519415,
        }),
      ).resolves.toStrictEqual(
        ANIMIXPLAY_LATEST_MOVIES_LOAD_MORE_RESPONSE.data,
      );
      expect(mockAxiosPost).toHaveBeenCalledTimes(1);
      expect(mockAxiosPost).toHaveBeenCalledWith(searchApiURL, 'movie=519415', {
        headers: formUrlencodedContentTypeHeader,
        timeout,
      });
    });
  });

  describe('fetchPopularEpisodes function', () => {
    it('should fetch latest popular episodes when isLoadMore is false', async () => {
      const mockAxiosGet = jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce(
          ANIMIXPLAY_LATEST_POPULAR_EPISODES_INITIAL_RESPONSE,
        );
      await expect(fetchPopularEpisodes()).resolves.toStrictEqual(
        ANIMIXPLAY_LATEST_POPULAR_EPISODES_INITIAL_RESPONSE.data,
      );
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
      expect(mockAxiosGet).toHaveBeenCalledWith(
        `${animixplayBaseUrl}/assets/s/popular.json`,
        {
          timeout,
        },
      );
    });

    it('should fetch latest popular episodes when isLoadMore is true', async () => {
      const mockAxiosGet = jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce(
          ANIMIXPLAY_LATEST_POPULAR_EPISODES_LOAD_MORE_RESPONSE,
        );
      await expect(
        fetchPopularEpisodes({isLoadMore: true}),
      ).resolves.toStrictEqual(
        ANIMIXPLAY_LATEST_POPULAR_EPISODES_LOAD_MORE_RESPONSE.data,
      );
      expect(mockAxiosGet).toHaveBeenCalledTimes(1);
      expect(mockAxiosGet).toHaveBeenCalledWith(
        `${animixplayBaseUrl}/assets/s/popularfull.json`,
        {
          timeout,
        },
      );
    });
  });

  it('should fetch episode html', async () => {
    const mockAxiosGet = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce(ANIMIXPLAY_EPISODE_HTML_RESPONSE);
    const path = '/v1/example-episode-1';
    await expect(fetchEpisodeHtml(path)).resolves.toStrictEqual(
      ANIMIXPLAY_EPISODE_HTML_RESPONSE.data,
    );
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(`${animixplayBaseUrl}${path}`, {
      timeout,
    });
  });

  it('should return base url', () => {
    expect(getAnimixplayBaseUrl()).toBe('https://animixplay.to');
  });
});
