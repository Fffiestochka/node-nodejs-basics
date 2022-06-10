import { getPath } from './getPath.js';
import { rm } from 'fs/promises';

export const remove = async () => {

  try {

    const fileToRemovePath = getPath(import.meta.url, 'fileToRemove.txt');
    await rm(fileToRemovePath);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove();
