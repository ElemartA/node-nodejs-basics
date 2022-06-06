import fs from "fs";
import { createUnzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, "files", "archive.gz")
  );
  const output = fs.createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const unzip = createUnzip();

  pipeline(input, unzip, output, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

decompress();
