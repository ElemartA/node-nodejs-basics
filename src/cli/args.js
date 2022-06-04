export const parseArgs = () => {
  const argum = process.argv.slice(2);
  console.log(process.argv);
  console.log(argum);

  const result = [];

  for (let i = 0; i < argum.length; i += 2) {
    result.push(`${argum[i].slice(2)} is ${argum[i + 1]}`);
  }
  console.log(result.join(", "));
};

parseArgs();
