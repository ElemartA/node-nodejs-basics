import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    "utf-8"
  );
  const output = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );

  input.on("data", (chunk) => output.write(chunk));
  input.on("error", (error) => console.log("Error", error.message));
};

write();
