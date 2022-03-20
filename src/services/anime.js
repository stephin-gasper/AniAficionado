import {fetchLatestEpisodes} from 'api/animePahe';

// eslint-disable-next-line import/prefer-default-export
export const getLatestEpisodes = async ({page} = {}) => {
  const data = await fetchLatestEpisodes({page});
  if (data)
    return data.map((episode) => ({
      id: episode.anime_id,
      title: episode.anime_title,
      imageUrl: episode.snapshot,
      latestEpisode: episode.episode,
    }));
  return [];
};
