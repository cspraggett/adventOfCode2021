import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((curr) => {
    const [command, units] = curr.split(" ");
    return { command, units: Number(units) };
  });

const position = { horizontal: 0, depth: 0, aim: 0 };

input.forEach(({ command, units }) => {
  switch (command) {
    case "forward":
      position.horizontal += units;
      position.depth += position.aim * units;
      break;
    case "up":
      position.aim -= units;
      break;
    case "down":
      position.aim += units;
      break;
  }
});

console.log({ position });
const total = position.horizontal * position.depth;

console.log(total);
