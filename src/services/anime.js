import * as cheerio from 'cheerio';
import {fetchHomepageHtml, fetchLatestSubbedEpisodes} from 'api/animixplay';
import formatDateToTimeAgo from 'utils/formatDateToTimeAgo';

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

class Anime {
  #lastSubbedEpisodeDateAndTime;

  async getInitialLatestSubbedEpisodes() {
    let list = [];
    try {
      const htmlString = await fetchHomepageHtml();
      if (htmlString) {
        const $ = cheerio.load(htmlString, {
          _useHtmlParser2: true,
        });

        $('#resultplace > .searchresult > li').each((i, el) => {
          this.#lastSubbedEpisodeDateAndTime = $(el).find('.timetext').text();
          list[i] = {
            id: $(el).find('a').attr('href'),
            title: $(el).find('a').attr('title'),
            imageUrl: $(el).find('.resultimg').attr('src'),
            ...getEpisodeNumbers($(el).find('.infotext').text()),
            releaseTime: getReleaseTimeText(this.#lastSubbedEpisodeDateAndTime),
            rating: getRatingText($(el).find('.rating').text()),
          };
        });
      }
    } catch {
      list = [];
    }
    return list;
  }

  async getLatestSubbedEpisodes() {
    const response = await fetchLatestSubbedEpisodes({
      episodeReleaseDateAndTime: this.#lastSubbedEpisodeDateAndTime,
    });

    if (response) {
      this.#lastSubbedEpisodeDateAndTime = response.last;
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
  }
}

export default Anime;
