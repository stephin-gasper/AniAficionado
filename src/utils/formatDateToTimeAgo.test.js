import formatDateToTimeAgo from './formatDateToTimeAgo';

describe('tests for formatDateToTimeAgo', () => {
  beforeAll(() => {
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Number(new Date('2022-09-30 00:00:00')));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return Just now when calculated seconds is 0', () => {
    expect(formatDateToTimeAgo(new Date('2022-09-30 00:00:00'))).toBe(
      'Just now',
    );
  });

  it.each`
    ssFromdate | seconds | expected
    ${'59'}    | ${1}    | ${'1 second'}
    ${'51'}    | ${9}    | ${'9 seconds'}
    ${'01'}    | ${59}   | ${'59 seconds'}
  `(
    'should return $expected ago when calculated seconds is $seconds and ss is $ssFromdate',
    ({ssFromdate, expected}) => {
      expect(
        formatDateToTimeAgo(new Date(`2022-09-29 23:59:${ssFromdate}`)),
      ).toBe(`${expected} ago`);
    },
  );

  it.each`
    mmssFromdate | minutes | expected
    ${'59:00'}   | ${1}    | ${'1 minute'}
    ${'50:01'}   | ${9}    | ${'9 minutes'}
    ${'49:59'}   | ${10}   | ${'10 minutes'}
    ${'01:00'}   | ${59}   | ${'59 minutes'}
  `(
    'should return $expected ago when calculated minutes is $minutes and mmss is $mmssFromdate',
    ({mmssFromdate, expected}) => {
      expect(
        formatDateToTimeAgo(new Date(`2022-09-29 23:${mmssFromdate}`)),
      ).toBe(`${expected} ago`);
    },
  );

  it.each`
    HHmmssFromdate | hours | expected
    ${'23:00:00'}  | ${1}  | ${'1 hour'}
    ${'22:00:00'}  | ${2}  | ${'2 hours'}
    ${'21:00:59'}  | ${2}  | ${'2 hours'}
    ${'21:59:00'}  | ${2}  | ${'2 hours'}
    ${'12:00:00'}  | ${12} | ${'12 hours'}
    ${'11:59:59'}  | ${12} | ${'12 hours'}
    ${'01:00:00'}  | ${23} | ${'23 hours'}
    ${'00:00:01'}  | ${23} | ${'23 hours'}
  `(
    'should return $expected ago when calculated hours is $hours and HHmmss is $HHmmssFromdate',
    ({HHmmssFromdate, expected}) => {
      expect(
        formatDateToTimeAgo(new Date(`2022-09-29 ${HHmmssFromdate}`)),
      ).toBe(`${expected} ago`);
    },
  );

  it.each`
    ddHHmmssFromdate | days | expected
    ${'29 00:00:00'} | ${1} | ${'1 day'}
    ${'28 23:59:59'} | ${1} | ${'1 day'}
    ${'27 23:59:59'} | ${2} | ${'2 days'}
    ${'27 22:59:01'} | ${2} | ${'2 days'}
    ${'26 00:00:01'} | ${3} | ${'3 days'}
    ${'26 00:00:00'} | ${4} | ${'4 days'}
    ${'23 00:00:01'} | ${6} | ${'6 days'}
  `(
    'should return $expected ago when calculated days is $days and ddHHmmss is $ddHHmmssFromdate',
    ({ddHHmmssFromdate, expected}) => {
      expect(formatDateToTimeAgo(new Date(`2022-09-${ddHHmmssFromdate}`))).toBe(
        `${expected} ago`,
      );
    },
  );

  it.each`
    ddHHmmssFromdate | weeks | expected
    ${'23 00:00:00'} | ${1}  | ${'1 week'}
    ${'22 23:59:59'} | ${1}  | ${'1 week'}
    ${'16 00:00:59'} | ${1}  | ${'1 week'}
    ${'16 00:00:00'} | ${2}  | ${'2 weeks'}
    ${'03 23:59:59'} | ${3}  | ${'3 weeks'}
    ${'02 00:00:00'} | ${4}  | ${'4 weeks'}
  `(
    'should return $expected ago when calculated weeks is $weeks and ddHHmmss is $ddHHmmssFromdate',
    ({ddHHmmssFromdate, expected}) => {
      expect(formatDateToTimeAgo(new Date(`2022-09-${ddHHmmssFromdate}`))).toBe(
        `${expected} ago`,
      );
    },
  );

  it('should return 4 weeks ago when calculated weeks is 4 and MMddHHmmss is 08-31 00:00:01', () => {
    expect(formatDateToTimeAgo(new Date(`2022-08-31 00:00:01`))).toBe(
      `4 weeks ago`,
    );
  });

  it.each`
    MMddHHmmssFromdate  | months | expected
    ${'08-31 00:00:00'} | ${1}   | ${'1 month'}
    ${'08-30 23:59:59'} | ${1}   | ${'1 month'}
    ${'08-01 00:00:01'} | ${1}   | ${'1 month'}
    ${'08-01 00:00:00'} | ${2}   | ${'2 months'}
    ${'07-02 23:59:59'} | ${2}   | ${'2 months'}
    ${'07-02 00:00:01'} | ${2}   | ${'2 months'}
    ${'06-03 00:00:00'} | ${3}   | ${'3 months'}
    ${'06-02 00:00:01'} | ${3}   | ${'3 months'}
    ${'06-02 00:00:00'} | ${4}   | ${'4 months'}
  `(
    'should return $expected ago when calculated months is $months and MMddHHmmss is $MMddHHmmssFromdate',
    ({MMddHHmmssFromdate, expected}) => {
      expect(formatDateToTimeAgo(new Date(`2022-${MMddHHmmssFromdate}`))).toBe(
        `${expected} ago`,
      );
    },
  );

  it('should return 12 months ago when calculated months is 12 and date is 2022-01-01 00:00:01', () => {
    jest
      .spyOn(Date, 'now')
      .mockReturnValue(Number(new Date('2023-01-01 00:00:00')));

    expect(formatDateToTimeAgo(new Date('2022-01-01 00:00:01'))).toBe(
      `12 months ago`,
    );
  });

  it.each`
    date                     | years | expected
    ${'2022-01-01 00:00:00'} | ${1}  | ${'1 year'}
    ${'2021-12-31 00:00:00'} | ${1}  | ${'1 year'}
    ${'2021-01-01 00:00:01'} | ${1}  | ${'1 year'}
    ${'2021-01-01 00:00:00'} | ${2}  | ${'2 years'}
    ${'2020-12-31 00:00:00'} | ${2}  | ${'2 years'}
    ${'2020-01-01 00:00:00'} | ${3}  | ${'3 years'}
    ${'2011-12-31 23:59:59'} | ${11} | ${'11 years'}
    ${'2011-01-01 00:00:00'} | ${12} | ${'12 years'}
  `(
    'should return $expected ago when calculated years is $years and date is $date',
    ({date, expected}) => {
      jest
        .spyOn(Date, 'now')
        .mockReturnValue(Number(new Date('2023-01-01 00:00:00')));

      expect(formatDateToTimeAgo(new Date(date))).toBe(`${expected} ago`);
    },
  );
});
