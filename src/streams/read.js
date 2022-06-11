import { getPath } from '../fs/getPath.js';
import { createReadStream } from 'fs';

export const read = async () => {
  try {
    const pathToFile = getPath(import.meta.url, 'fileToRead.txt');
    const readableStream = createReadStream(pathToFile, 'utf-8');
    readableStream.pipe(process.stdout);
  } catch (err) {
    throw err;
  }
};

read();

// первый вариант:
    // let data = '';
    // readableStream.on('data', (chunk) => (data += chunk));
    // readableStream.on('end', () => process.stdout.write(data));
