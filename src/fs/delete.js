import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  fs.readFile(
    path.join(__dirname, "files", "fileToRemove.txt"),
    (err, data) => {
      if (err)
        throw new Error("FS operation failed: fileToRemove.txt was not found");

      fs.unlink(path.join(__dirname, "files", "fileToRemove.txt"), (err) => {
        if (err)
          throw new Error("FS operation failed: fileToRemove was not remove");
        console.log("fileToRemove was deleted");
      });
    }
  );
};

remove();
