process.env.RSS_name1 = "value1";
process.env.RSS_name2 = "value2";
process.env.RSS_name3 = "value3";

export const parseEnv = () => {
  const variables = process.env;
  console.log(
    Object.keys(variables)
      .filter((el) => el.slice(0, 4) === "RSS_")
      .map((elem) => `${elem} = ${variables[elem]}`)
      .join(",")
  );
};

parseEnv();
