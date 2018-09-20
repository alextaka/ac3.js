import fs from 'fs';
import path from 'path';

import handleReadStream from './reader';
import handleFrameStream from './frame';

const TEST_FILE = path.join(__dirname, '..', 'tests', 'test0.ac3');

const inputStream = fs.createReadStream(TEST_FILE);
const outputStream = fs.createWriteStream('test.bin');

const frameStream = handleReadStream(inputStream);
const result = handleFrameStream(frameStream, outputStream);
