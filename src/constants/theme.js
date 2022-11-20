import RATING_SCALE_KEYS from './ratingScaleKeys';

export default {
  primaryColor: '#6a5498',
  secondaryColor: '#9381b9',
  tertiaryColor: '#352462',
  textColor: '#fffade',
  ratingColors: {
    [RATING_SCALE_KEYS.EXCELLENT]: '#019545',
    [RATING_SCALE_KEYS.GREAT]: '#01ba38',
    [RATING_SCALE_KEYS.GOOD]: '#8adc4c',
    [RATING_SCALE_KEYS.OK]: '#eece35',
    [RATING_SCALE_KEYS.BAD]: '#f25b2a',
    [RATING_SCALE_KEYS.POOR]: '#e22026',
    [RATING_SCALE_KEYS.UNRATED]: '#a1a0a1',
  },
  overlayColor: 'rgba(106,84,153,0.7)',
};
