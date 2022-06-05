import fs from "fs";
import path from "path";
import crypto from "crypto";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  fs.readFile(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt"),
    "utf-8",
    (err, data) => {
      if (err) {
        throw new Error("FS operation failed");
      } else {
        const hash = crypto.createHash("sha256").update(data).digest("hex");
        console.log(hash);
      }
    }
  );
};

calculateHash();
