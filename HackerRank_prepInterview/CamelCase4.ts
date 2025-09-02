const processData = (input: string): void => {
  const arr = input.split("\r\n");
  arr.forEach((item) => {
    const arrItem = item.split(";");
    const method = arrItem[0];
    const type = arrItem[1];
    let str = arrItem[2];
    if (method === "S") {
      if (type === "M") {
        str = str.split("()")[0];
      }
      str = splitCamelCase(str);
      console.log(str);
    }
    if (method === "C") {
      str = joinCamelCase(str, type);
      if (type === "M") {
        console.log(str + "()");
      } else {
        console.log(str);
      }
    }
  });
};

const splitCamelCase = (s: string): string => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      if (i === 0) s = s.replace(s[i], s[i].toLowerCase());
      else s = s.replace(s[i], " " + s[i].toLowerCase());
    }
  }
  return s;
};
const joinCamelCase = (s: string, type: string): string => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      s = s.replace(s[i] + s[i + 1], s[i + 1].toUpperCase());
    }
  }
  if (type === "C") s = s.replace(s[0], s[0].toUpperCase());
  return s;
};
