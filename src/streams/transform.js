import { Transform } from "stream";
import { stdin, stdout } from "process";

export const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split("").reverse().join(""));
    },
  });
  stdin.pipe(reverseString).pipe(stdout);
};

transform();
