import { getPath } from './getPath.js';
import { rename as renameFile } from 'fs/promises';

export const rename = async () => {
  try {
    const initialName = getPath(import.meta.url, 'wrongFilename.txt');
    const requestedName = getPath(import.meta.url, 'properFilename.md');
    await renameFile(initialName, requestedName);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

rename();
