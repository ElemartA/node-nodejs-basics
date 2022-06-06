import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  fs.readFile(path.join(__dirname, "files", "fileToRead.txt"), (err, data) => {
    if (err)
      throw new Error("FS operation failed: fileToRead.txt was not found");
    console.log(data.toString());
  });
};

read();
