import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const src = __dirname + '/files/fresh.txt';
  const existMsg = 'FS operation failed';
  const content = 'I am fresh and young';
  try {
    await writeFile(src, content, { flag: 'wx' });
  } catch (error) {
    throw new Error(existMsg);
  }
};

create();
