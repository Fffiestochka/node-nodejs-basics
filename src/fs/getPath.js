import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

export const getPath = (url, fileName) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', fileName);
  return filePath;
}