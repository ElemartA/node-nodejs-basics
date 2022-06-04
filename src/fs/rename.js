import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  fs.readFile(
    path.join(__dirname, "files", "wrongFilename.txt"),
    (err, data) => {
      if (err)
        throw new Error("FS operation failed: wrongFilename.txt was not found");

      fs.readFile(
        path.join(__dirname, "files", "properFilename.md"),
        (err, data) => {
          if (!err)
            throw new Error(
              "FS operation failed: properFilename.md alredy exist"
            );
          fs.rename(
            path.join(__dirname, "files", "wrongFilename.txt"),
            path.join(__dirname, "files", "properFilename.md"),
            (err) => {
              if (err)
                throw new Error("FS operation failed: Rename wasn't complete!");
              console.log("Rename complete!");
            }
          );
        }
      );
    }
  );
};

rename();
