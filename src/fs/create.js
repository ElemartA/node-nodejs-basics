import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
// import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const path1 = path.join(__dirname, "files", "fresh.txt");

export const create = async () => {
  fs.access(path1, (err) => {
    if (!err) {
      throw new Error("FS operation failed: fresh.txt alredy exist");
    }

    fs.writeFile(
      path.join(__dirname, "files", "fresh.txt"),
      "I am fresh and young",
      (err) => {
        if (err) {
          throw new Error("FS operation failed");
        }
      }
    );
  });
};
create();
