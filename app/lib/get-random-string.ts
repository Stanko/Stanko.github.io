export const getRandomString = (): string => {
  const time = new Date().getTime().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${time}-${random}`;
};
