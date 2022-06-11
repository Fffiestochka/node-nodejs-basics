import { getPath } from '../fs/getPath.js';
import { createWriteStream } from 'fs';

export const write = async () => {
   try {
     const pathToFile = getPath(import.meta.url, 'fileToWrite.txt');
     const writeStream = createWriteStream(pathToFile, 'utf-8');
     process.stdout.write('Please write something :)\n');
     process.stdin.pipe(writeStream);
   } catch (err) {
     throw err;
   }
};

write();
