import * as cheerio from 'cheerio';
import {fetchHomepageHtml} from 'api/animixplay';

// eslint-disable-next-line import/prefer-default-export
export const getInitialLatestSubbedEpisodes = async () => {
  let list = [];
  try {
    const htmlString = await fetchHomepageHtml();

    if (htmlString) {
      const $ = cheerio.load(htmlString, {
        _useHtmlParser2: true,
      });
      const episodeNumberRegex = /EP (?<number>\d+)\/(?<total>\?|\d+)/;
      $('#resultplace > .searchresult > li').each((i, el) => {
        const episodeText = $(el)
          .find('.infotext')
          .text()
          .match(episodeNumberRegex).groups;
        list[i] = {
          id: $(el).find('a').attr('href'),
          title: $(el).find('a').attr('title'),
          imageUrl: $(el).find('.resultimg').attr('src'),
          latestEpisodeNumber: episodeText.number,
          totalEpisodes: episodeText.total,
          releaseTime: $(el).find('.timetext').text(),
        };
      });
    }
  } catch {
    list = [];
  }
  return list;
};
