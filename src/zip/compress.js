import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import { getPath } from '../fs/getPath.js';

export const compress = async () => {
     const pathToInitFile = getPath(import.meta.url, 'fileToCompress.txt');
     const pathToFinalFile = getPath(import.meta.url, 'archive.gz');
     const initialContent = createReadStream(pathToInitFile);
     const compressedContent = createWriteStream(pathToFinalFile);
     const gzip = createGzip();

     pipeline(initialContent, gzip, compressedContent, (err) => {
       if (err) throw err;
     });
};

compress();