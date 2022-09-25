import {ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE} from 'api/animixplay.mock';

export const fetchHomepageHtml = jest.fn(() =>
  Promise.resolve(ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE.data),
);
