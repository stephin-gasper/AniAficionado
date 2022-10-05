import * as cheerio from 'cheerio';
import {fetchHomepageHtml} from 'api/animixplay';
import formatDateToTimeAgo from 'utils/formatDateToTimeAgo';

const getRatingText = text => {
  if (Number(text) === 0) return '?';
  const result = text.match(/(?<first>\d)(?<rest>\d+)/).groups;
  return `${result.first}.${result.rest}`;
};

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
          releaseTime: formatDateToTimeAgo(
            new Date($(el).find('.timetext').text()),
          ),
          rating: getRatingText($(el).find('.rating').text()),
        };
      });
    }
  } catch {
    list = [];
  }
  return list;
};
