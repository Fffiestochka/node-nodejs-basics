import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdir, mkdir, rm, copyFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToBasicFolder = __dirname + '/files';
const pathToCopyFolder = __dirname + '/files-copy';

export const copy = async () => {
  try {
    const files = await readdir(pathToBasicFolder);
    await mkdir(pathToCopyFolder);
    // for (let i = 0; i < files.length; i++) {
    //   let pathToBasicFile = pathToBasicFolder + files[i];
    //   let pathToCopyFile = pathToCopyFolder + files[i];
    //   await copyFile(pathToBasicFile, pathToCopyFile);
    // }

   files.map(file => copyFile(`${pathToBasicFolder}/${file}`, `${pathToCopyFolder}/${file}`));

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();
