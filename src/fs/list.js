import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  fs.readdir(path.join(__dirname, "files"), (err, arrayFiles) => {
    if (err) throw new Error("FS operation failed: files not found");

    arrayFiles.map((file) => {
      fs.readFile(path.join(__dirname, "files", `${file}`), (err, data) => {
        if (err) throw new Error("FS operation failed: file was not found");
        console.log(file.toString());
      });
    });
  });
};

list();
