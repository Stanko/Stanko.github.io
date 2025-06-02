import { statSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { DATE_MATCH_REGEX } from '../lib/constants';

export const readDirectories = async (path: string) => {
  const files = await readdir(path);

  return files.filter((file) => {
    const filePath = join(path, file);
    const fileStat = statSync(filePath);
    return fileStat.isDirectory();
  });
};

export const getDateFromFilename = (filename: string): string | null => {
  const dateMatch = filename.match(DATE_MATCH_REGEX);

  if (dateMatch) {
    const date = dateMatch[1] as string;

    return date;
  }

  return null;
};
