import { readFileSync } from "fs";

const threeWindows: number[] = [];
const input = readFileSync("./day1/input.txt", "utf8")
  .split("\n")
  .map((c) => Number(c))
  .forEach((curr, idx, arr) => {
    threeWindows.push(curr + arr[idx + 1] + arr[idx + 2]);
  });

const result = threeWindows.reduce(
  (acc, curr, idx, arr) => (curr > arr[idx - 1] ? acc + 1 : acc),
  0
);
console.log(result);
