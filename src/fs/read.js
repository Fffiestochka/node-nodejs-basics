import { getPath } from './getPath.js';
import { readFile } from 'fs/promises';

export const read = async () => {
  try {
    const pathToFile = getPath(import.meta.url, 'fileToRead.txt');
    const fileContent = await readFile(pathToFile, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

// export const read = async () => {
//   try {
//     const pathToFile = getPath(import.meta.url, 'fileToRead.txt');
//     console.log(pathToFile);
//     const fileContent = createReadStream(pathToFile, 'utf-8');
//     let data = '';
//     fileContent.on('data', (chunk) => (data += chunk));
//     fileContent.on('end', () => console.log(data));
//   } catch (err) {
//     throw new Error('FS operation failed');
//   }
// };

read();
