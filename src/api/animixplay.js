import axios from 'axios';

const animixplayBaseUrl = 'https://animixplay.to/';
const timeout = 20000;

// eslint-disable-next-line import/prefer-default-export
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
