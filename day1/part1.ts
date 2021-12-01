import { readFileSync } from "fs";

const input = readFileSync("./day1/input.txt", "utf8")
  .split("\n")
  .map((c) => Number(c))
  .reduce((acc, curr, idx, arr) => (curr > arr[idx - 1] ? acc + 1 : acc), 0);
console.log(input);
