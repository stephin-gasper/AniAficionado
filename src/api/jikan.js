import axios from 'axios';

// const jikanBaseUrl = 'https://api.jikan.moe/v4';
const jikanBaseUrl = 'http://10.0.2.2:3002/v4';

// eslint-disable-next-line import/prefer-default-export
export const searchAnime = async ({searchString, page = 1} = {}) => {
  try {
    const {data} = await axios.get(`${jikanBaseUrl}/anime`, {
      params: {
        q: searchString,
        page,
      },
      timeout: 60000,
    });

    return data.data;
  } catch {
    return null;
  }
};
