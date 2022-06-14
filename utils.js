import fs from "fs"
import path from 'path';
import {fileURLToPath} from 'url';

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    const fileContent = buffer.toString()
    return JSON.parse(fileContent)
  }