import getRatingColorKey from './getRatingColorKey';

describe('tests for getRatingColorKey', () => {
  const ratingScaleKeys = {
    EXCELLENT: 'excellent',
    GREAT: 'great',
    GOOD: 'good',
    OK: 'ok',
    BAD: 'bad',
    POOR: 'poor',
    UNRATED: 'unrated',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return unrated when rating is ?', () => {
    expect(getRatingColorKey('?')).toBe(ratingScaleKeys.UNRATED);
  });

  it.each`
    rating
    ${'10'}
    ${'9.99'}
    ${'9.55'}
    ${'9.50'}
    ${'9.10'}
    ${'9.05'}
    ${'9.01'}
  `('should return excellent when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.EXCELLENT);
  });

  it.each`
    rating
    ${'9'}
    ${'8.99'}
    ${'8.55'}
    ${'8.50'}
    ${'8.10'}
    ${'8.05'}
    ${'8.01'}
    ${'7.99'}
    ${'7.55'}
    ${'7.50'}
    ${'7.10'}
    ${'7.05'}
    ${'7.01'}
  `('should return great when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.GREAT);
  });

  it.each`
    rating
    ${'7'}
    ${'6.99'}
    ${'6.55'}
    ${'6.50'}
    ${'6.10'}
    ${'6.05'}
    ${'6.01'}
    ${'5.99'}
    ${'5.55'}
    ${'5.50'}
    ${'5.10'}
    ${'5.05'}
    ${'5.01'}
  `('should return good when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.GOOD);
  });

  it.each`
    rating
    ${'5'}
    ${'4.99'}
    ${'4.55'}
    ${'4.50'}
    ${'4.10'}
    ${'4.05'}
    ${'4.01'}
    ${'3.99'}
    ${'3.55'}
    ${'3.50'}
    ${'3.10'}
    ${'3.05'}
    ${'3.01'}
  `('should return ok when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.OK);
  });

  it.each`
    rating
    ${'3'}
    ${'2.99'}
    ${'2.55'}
    ${'2.50'}
    ${'2.10'}
    ${'2.05'}
    ${'2.01'}
    ${'2.00'}
  `('should return bad when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.BAD);
  });

  it.each`
    rating
    ${'1.99'}
    ${'1.55'}
    ${'1.50'}
    ${'1.10'}
    ${'1.05'}
    ${'1.01'}
    ${'1.00'}
    ${'1'}
  `('should return poor when rating is $rating', ({rating}) => {
    expect(getRatingColorKey(rating)).toBe(ratingScaleKeys.POOR);
  });
});
