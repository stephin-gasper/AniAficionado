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
} from 'api/animixplay.mock';

const defaultEpisodeReleaseDateAndTime = '3020-05-06 00:00:00';

export const fetchHomepageHtml = jest.fn(() =>
  Promise.resolve(ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE.data),
);

export const fetchLatestSubbedEpisodes = jest.fn(() =>
  Promise.resolve(ANIMIXPLAY_LATEST_SUBBED_EPISODES_RESPONSE.data),
);

export const fetchLatestDubbedEpisodes = jest.fn(
  ({episodeReleaseDateAndTime = defaultEpisodeReleaseDateAndTime} = {}) => {
    if (episodeReleaseDateAndTime === defaultEpisodeReleaseDateAndTime) {
      return Promise.resolve(
        ANIMIXPLAY_LATEST_DUBBED_EPISODES_INITIAL_RESPONSE.data,
      );
    }
    return Promise.resolve(
      ANIMIXPLAY_LATEST_DUBBED_EPISODES_LOAD_MORE_RESPONSE.data,
    );
  },
);

export const fetchAllRecentEpisodes = jest.fn(
  ({episodeReleaseDateAndTime = defaultEpisodeReleaseDateAndTime} = {}) => {
    if (episodeReleaseDateAndTime === defaultEpisodeReleaseDateAndTime) {
      return Promise.resolve(
        ANIMIXPLAY_ALL_RECENT_EPISODES_INITIAL_RESPONSE.data,
      );
    }
    return Promise.resolve(
      ANIMIXPLAY_ALL_RECENT_EPISODES_LOAD_MORE_RESPONSE.data,
    );
  },
);

export const fetchLatestMovies = jest.fn(({id = 99999999} = {}) => {
  if (id === 99999999) {
    return Promise.resolve(ANIMIXPLAY_LATEST_MOVIES_INITIAL_RESPONSE.data);
  }
  return Promise.resolve(ANIMIXPLAY_LATEST_MOVIES_LOAD_MORE_RESPONSE.data);
});

export const fetchPopularEpisodes = jest.fn(({isLoadMore = false} = {}) => {
  if (isLoadMore) {
    return Promise.resolve(
      ANIMIXPLAY_LATEST_POPULAR_EPISODES_LOAD_MORE_RESPONSE.data,
    );
  }
  return Promise.resolve(
    ANIMIXPLAY_LATEST_POPULAR_EPISODES_INITIAL_RESPONSE.data,
  );
});

export const fetchEpisodeHtml = jest.fn(() =>
  Promise.resolve(ANIMIXPLAY_EPISODE_HTML_RESPONSE.data),
);
