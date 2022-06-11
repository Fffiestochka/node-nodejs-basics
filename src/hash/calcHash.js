import { getHashes, createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { getPath } from '../fs/getPath.js';

//  console.log(getHashes());

export const calculateHash = async () => {
  try {

    const pathToFile = getPath(import.meta.url, 'fileToCalculateHashFor.txt');
    const initialText = await readFile(pathToFile, 'utf-8');
    const hash = createHash('sha256').update(initialText).digest('hex');
    console.log(hash);
    return hash;

  } catch (err) {
    throw err;
  }
};

calculateHash();
