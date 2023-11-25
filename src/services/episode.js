import * as cheerio from 'cheerio';
import {btoa} from 'react-native-quick-base64';
import {fetchEpisodeHtml, getAnimixplayBaseUrl} from 'api/animixplay';

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

class Episode {
  #streamingLinksObj;

  #gohostname = 'gogoplay.io';

  async getDetails(path) {
    try {
      const htmlString = await fetchEpisodeHtml(path);
      if (htmlString) {
        const $ = cheerio.load(htmlString, {
          _useHtmlParser2: true,
        });

        this.#streamingLinksObj = JSON.parse($('#epslistplace').text());
        let episodesList = new Array(this.#streamingLinksObj.eptotal).fill({
          isFiller: false,
        });
        let malid;
        // Use pattern search instead of eval to get variables because of dynamic fetch from third party
        $('script')
          .not((i, el) => $(el).attr('src'))
          .each((i, el) => {
            const scriptText = $(el).text().replace(/\s/g, '');
            const malidRegexMatchResult = scriptText.match(
              /malid='(?<result>\d+)/,
            )?.groups?.result;
            if (malidRegexMatchResult) {
              malid = malidRegexMatchResult;
            }
            const gohostnameRegexMatchResult = scriptText.match(
              /copt='#gh=(?<result>\S+)';\//,
            )?.groups?.result;
            if (gohostnameRegexMatchResult) {
              this.#gohostname = gohostnameRegexMatchResult;
            }
            const fillerListRegexMatchResult = scriptText.match(
              /fillerData=\[(?<result>.+)\];/,
            )?.groups?.result;
            episodesList = processFillerAndUpdateEpisodeList(
              fillerListRegexMatchResult,
              episodesList,
            );
          });
        const statusText = $('#status')
          .text()
          .match(/Status : (?<status>\w+)/).groups;
        const {status} = statusText;
        const genres = $('#genredata').text().split(', ');
        const animetitle = $('.animetitle').text();
        return {
          episodesList,
          malid,
          status,
          genres,
          animetitle,
        };
      }
    } catch {
      /* empty */
    }
    throw new Error('No response');
  }

  getStreamingLinks({episodeNumber}) {
    const parsedNumber = String(parseInt(episodeNumber, 10) - 1);
    const link = this.#streamingLinksObj?.[parsedNumber]
      ? this.#streamingLinksObj[parsedNumber]?.replace(
          'gogohd.net',
          this.#gohostname,
        )
      : '';
    const linkRegexMatchResult = link.match(
      /streaming\.php\?id=(?<result>.+)&title=/,
    )?.groups?.result;
    let internalPlayerLink;
    if (linkRegexMatchResult) {
      internalPlayerLink = `${getAnimixplayBaseUrl()}/api/cW9${btoa(
        `${linkRegexMatchResult}LTXs3GrU8we9O${btoa(linkRegexMatchResult)}`,
      )}`;
    }
    return {externalPlayerLink: link, internalPlayerLink};
  }
}

export default Episode;
