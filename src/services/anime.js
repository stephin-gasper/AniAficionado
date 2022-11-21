import * as cheerio from 'cheerio';
import {
  fetchHomepageHtml,
  fetchLatestSubbedEpisodes,
  fetchEpisodeHtml,
} from 'api/animixplay';
import formatDateToTimeAgo from 'utils/formatDateToTimeAgo';

let lastSubbedEpisodeDateAndTime;
let episodesPlayerLinkData;

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

const processFillerAndUpdateEpisodeList = (
  fillerListRegexMatchResult,
  episodesList,
) => {
  const episodesListCopy = [...episodesList];
  if (fillerListRegexMatchResult) {
    let parseSafeArrayString = `[${fillerListRegexMatchResult}]`;
    parseSafeArrayString = parseSafeArrayString.replace(/,]$/, ']'); // remove trailing comma
    parseSafeArrayString = parseSafeArrayString.replace(/'/g, '"'); // replace single quotes to double quotes
    const fillerList = JSON.parse(parseSafeArrayString);
    for (let outerIndex = 0; outerIndex < fillerList.length; outerIndex++) {
      const fillerData = fillerList[outerIndex];
      if (typeof fillerData === 'string' && fillerData.includes('-')) {
        const parseFillerData = fillerData.split('-', 2);
        const startIndex = parseInt(parseFillerData[0], 10);
        const endIndex = parseInt(parseFillerData[1], 10) + 1;
        for (
          let innerLoopIndex = startIndex;
          innerLoopIndex < endIndex;
          innerLoopIndex++
        ) {
          episodesListCopy[innerLoopIndex - 1] = {isFiller: true};
        }
      } else if (typeof fillerData === 'number') {
        episodesListCopy[fillerData - 1] = {isFiller: true};
      }
    }
  }
  return episodesListCopy;
};

export const getEpisodeData = async path => {
  try {
    const htmlString = await fetchEpisodeHtml(path);
    if (htmlString) {
      const $ = cheerio.load(htmlString, {
        _useHtmlParser2: true,
      });

      episodesPlayerLinkData = JSON.parse($('#epslistplace').text());
      let episodesList = new Array(episodesPlayerLinkData.eptotal).fill({
        isFiller: false,
      });
      let malid;
      let gohostname = 'gogoplay.io';
      $('script')
        .not((i, el) => $(el).attr('src'))
        .each((i, el) => {
          const scriptText = $(el).text().replace(/\s/g, '');
          const malidRegexMatchResult = scriptText.match(
            /malid='(?<result>\d+)/,
          )?.groups?.result;
          if (malidRegexMatchResult) {
            malid = parseInt(malidRegexMatchResult, 10);
          }
          const gohostnameRegexMatchResult = scriptText.match(
            /copt='#gh=(?<result>\S+)';\//,
          )?.groups?.result;
          if (gohostnameRegexMatchResult) {
            gohostname = gohostnameRegexMatchResult;
          }
          const fillerListRegexMatchResult = scriptText.match(
            /fillerData=\[(?<result>.+)\];/,
          )?.groups?.result;
          episodesList = processFillerAndUpdateEpisodeList(
            fillerListRegexMatchResult,
            episodesList,
          );
        });
      console.log(malid);
      console.log(gohostname);
      console.log(episodesList);
      const statusText = $('#status')
        .text()
        .match(/Status : (?<status>\w+)/).groups;
      const {status} = statusText;
      const genres = $('#genredata').text().split(', ');
      const animetitle = $('.animetitle').text();
      return {};
    }
  } catch (e) {
    console.log('e', e);
    /* empty */
  }
  throw new Error('No response');
};
