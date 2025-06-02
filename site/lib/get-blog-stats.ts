export const getYearsFromTheBlogStart = () => {
  const now = Date.now();
  const startedWriting = new Date('2016-02-21').getTime();
  const yearInMs = 1000 * 60 * 60 * 24 * 365;

  let years = (now - startedWriting) / yearInMs;

  if (years % 1 > 0.75) {
    // round up
    years = Math.ceil(years);
  } else {
    // round down
    years = Math.floor(years);
  }

  return years;
};

export const getYearsAndMonthsFromBlogStart = () => {
  const now = new Date();
  const startYear = 2016;
  const startMonth = 2; // January

  const years = now.getFullYear() - startYear;
  const months = now.getMonth() + 1 - startMonth;

  return {
    years,
    months,
  };
};
