export const freshImport = async (path: string) => {
  const result = await import(`${path}?update=${Date.now()}`);

  return result;
};
