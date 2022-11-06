import axios from 'axios';

const animixplayBaseUrl = 'https://animixplay.to';
const searchApiURL = `${animixplayBaseUrl}/api/search`;
const timeout = 20000;
const defaultEpisodeReleaseDateAndTime = '3020-05-06 00:00:00';

export const fetchHomepageHtml = async () => {
  try {
    const {data} = await axios.get(animixplayBaseUrl, {
      timeout,
    });

    return data;
  } catch {
    return null;
  }
};

const makeFormURLEncodedRequest = async (url, data) => {
  try {
    const {data: dataFromResponse} = await axios.post(url, data, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      timeout,
    });

    return dataFromResponse;
  } catch {
    return null;
  }
};

export const fetchLatestSubbedEpisodes = async ({episodeReleaseDateAndTime}) =>
  makeFormURLEncodedRequest(
    searchApiURL,
    `seasonal=${encodeURIComponent(episodeReleaseDateAndTime)}`,
  );

export const fetchLatestDubbedEpisodes = async ({
  episodeReleaseDateAndTime = defaultEpisodeReleaseDateAndTime,
} = {}) =>
  makeFormURLEncodedRequest(
    searchApiURL,
    `seasonaldub=${encodeURIComponent(episodeReleaseDateAndTime)}`,
  );

export const fetchAllRecentEpisodes = async ({
  episodeReleaseDateAndTime = defaultEpisodeReleaseDateAndTime,
} = {}) =>
  makeFormURLEncodedRequest(
    episodeReleaseDateAndTime === defaultEpisodeReleaseDateAndTime
      ? `${animixplayBaseUrl}/a/XsWgdGCnKJfNvDFAM28EV`
      : searchApiURL,
    `recent=${encodeURIComponent(episodeReleaseDateAndTime)}`,
  );

export const fetchLatestMovies = async ({id = 99999999} = {}) =>
  makeFormURLEncodedRequest(searchApiURL, `movie=${id}`);
