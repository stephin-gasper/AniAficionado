import RATING_SCALE_KEYS from '../constants/ratingScaleKeys';

const ratingScaleList = [
  {ratingKey: RATING_SCALE_KEYS.EXCELLENT, range: [10, 9.01]},
  {ratingKey: RATING_SCALE_KEYS.GREAT, range: [9, 7.01]},
  {ratingKey: RATING_SCALE_KEYS.GOOD, range: [7, 5.01]},
  {ratingKey: RATING_SCALE_KEYS.OK, range: [5, 3.01]},
  {ratingKey: RATING_SCALE_KEYS.BAD, range: [3, 2]},
  {ratingKey: RATING_SCALE_KEYS.POOR, range: [2, 1]},
];

const getRatingColorKey = rating => {
  const parsedRating = Number(rating);
  if (!Number.isFinite(parsedRating)) {
    return RATING_SCALE_KEYS.UNRATED;
  }
  let result;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of ratingScaleList) {
    if (item.range.some(number => parsedRating >= number)) {
      result = item;
      break;
    }
  }
  return result.ratingKey;
};

export default getRatingColorKey;
