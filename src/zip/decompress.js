import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { getPath } from '../fs/getPath.js';

export const decompress = async () => {
  const pathToCompressedFile = getPath(import.meta.url, 'archive.gz');
  const pathToFinalFile = getPath(import.meta.url, 'fileToCompress2.txt');
  const compressedContent = createReadStream(pathToCompressedFile);
  const finalContent = createWriteStream(pathToFinalFile);

  const unzip = createUnzip();

  pipeline(compressedContent, unzip, finalContent, (err) => {
    if (err) throw err;
  });
};

decompress();
