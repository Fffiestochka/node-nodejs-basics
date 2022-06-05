const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

export const create = async () => {
  try {
    const pathToNewFile = path.join(__dirname, 'fresh.txt');
    const content = 'I am fresh and young';
    const isFileExist = await fsPromises.access(pathToNewFile);
    console.log(isFileExist);

    // await fsPromises.writeFile(pathToNewFile, content);
  } catch {}
};

