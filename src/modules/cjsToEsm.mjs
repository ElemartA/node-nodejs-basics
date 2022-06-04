import path from "path";
import fs from "fs";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import url from "url";
import "./files/c.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function read(path) {
  const data = await fs.promises.readFile(new URL(path, import.meta.url));
  return JSON.parse(data);
}

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = await read("./files/a.json");
} else {
  unknownObject = await read("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
