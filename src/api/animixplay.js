import axios from 'axios';

const animixplayBaseUrl = 'https://animixplay.to';
const timeout = 20000;

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

const fetchSearchEpisodes = async data => {
  try {
    const {data: dataFromResponse} = await axios.post(
      `${animixplayBaseUrl}/api/search`,
      data,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        timeout,
      },
    );

    return dataFromResponse;
  } catch {
    return null;
  }
};

export const fetchLatestSubbedEpisodes = async ({episodeReleaseDate}) =>
  fetchSearchEpisodes(`seasonal=${encodeURIComponent(episodeReleaseDate)}`);
