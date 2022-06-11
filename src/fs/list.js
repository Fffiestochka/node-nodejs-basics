import { getFolderPath } from './getPath.js';
import { readdir } from 'fs/promises';

export const list = async () => {
  try {

    const pathToFolder = getFolderPath(import.meta.url);
    console.log(pathToFolder);
    let fileNameArr = await readdir(pathToFolder);
    console.log(fileNameArr);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

list();