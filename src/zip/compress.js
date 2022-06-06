import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt"),
    "utf-8"
  );
  const output = fs.createWriteStream(
    path.join(__dirname, "files", "archive.gz")
  );

  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(output);
};

compress();
