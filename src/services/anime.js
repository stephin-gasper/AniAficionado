import * as cheerio from 'cheerio';
import {fetchHomepageHtml, fetchLatestSubbedEpisodes} from 'api/animixplay';
import formatDateToTimeAgo from 'utils/formatDateToTimeAgo';

let lastSubbedEpisodeDateAndTime;

const getEpisodeNumbers = episodeText => {
  const episodeNumberRegex = /EP (?<number>\d+)\/(?<total>\?|\d+)/;
  const result = episodeText.match(episodeNumberRegex).groups;
  return {
    latestEpisodeNumber: result.number,
    totalEpisodes: result.total,
  };
};

const getReleaseTimeText = dateText => formatDateToTimeAgo(new Date(dateText));

const getRatingText = text => {
  if (Number(text) === 0) return '?';
  const result = text.match(/(?<first>\d)(?<rest>\d+)/).groups;
  return `${result.first}.${result.rest}`;
};

export const getInitialLatestSubbedEpisodes = async () => {
  let list = [];
  try {
    const htmlString = await fetchHomepageHtml();
    if (htmlString) {
      const $ = cheerio.load(htmlString, {
        _useHtmlParser2: true,
      });

      $('#resultplace > .searchresult > li').each((i, el) => {
        lastSubbedEpisodeDateAndTime = $(el).find('.timetext').text();
        list[i] = {
          id: $(el).find('a').attr('href'),
          title: $(el).find('a').attr('title'),
          imageUrl: $(el).find('.resultimg').attr('src'),
          ...getEpisodeNumbers($(el).find('.infotext').text()),
          releaseTime: getReleaseTimeText(lastSubbedEpisodeDateAndTime),
          rating: getRatingText($(el).find('.rating').text()),
        };
      });
    }
  } catch {
    list = [];
  }
  return list;
};

export const getLatestSubbedEpisodes = async () => {
  const response = await fetchLatestSubbedEpisodes({
    episodeReleaseDateAndTime: lastSubbedEpisodeDateAndTime,
  });

  if (response) {
    lastSubbedEpisodeDateAndTime = response.last;
    return {
      list: response.result.map(item => ({
        id: item.url,
        title: item.title,
        imageUrl: item.picture,
        ...getEpisodeNumbers(item.infotext),
        releaseTime: getReleaseTimeText(item.timetop),
        rating: getRatingText(`${item.score}`),
      })),
      canLoadMoreResults: response.more,
    };
  }

  throw new Error('No response');
};
