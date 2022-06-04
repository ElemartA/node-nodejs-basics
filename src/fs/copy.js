import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  fs.mkdir("files_copy", (err) => {
    if (err) throw new Error("FS operation failed: files_copy alredy exist");
  });

  fs.readdir("files", (err, arrayFiles) => {
    if (err) throw new Error("FS operation failed: files not found");

    arrayFiles.map((file) => {
      fs.writeFile(
        path.join(__dirname, "files_copy", `${file}`),
        file.toString(),
        (error) => {
          if (error) throw new Error("FS operation failed");
        }
      );
    });
  });
};

copy();
