import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    "utf-8"
  );

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => console.log("End", data));
  stream.on("error", (error) => console.log("Error", error.message));
};

read();
