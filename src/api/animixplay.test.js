import axios from 'axios';
import {fetchHomepageHtml} from './animixplay';
import {ANIMIXPLAY_HOMEPAGE_HTML_RESPONSE} from './animixplay.mock';

describe('tests for animixplay related apis', () => {
  const animixplayBaseUrl = 'https://animixplay.to/';
  const timeout = 20000;

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
});
