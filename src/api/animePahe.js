import axios from 'axios';

const animePaheBaseUrl = 'https://animepahe.com/api/';

// eslint-disable-next-line import/prefer-default-export
export const fetchLatestEpisodes = async ({page = 1} = {}) => {
  try {
    const {data} = await axios.get(animePaheBaseUrl, {
      params: {
        m: 'airing',
        page,
      },
      timeout: 60000,
    });

    return data.data;
  } catch {
    return null;
  }
};
