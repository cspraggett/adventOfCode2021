import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8")
  .split("\n")
  .map((curr) => {
    const [command, units] = curr.split(" ");
    return { command, units: Number(units) };
  });

const position = { horizontal: 0, depth: 0 };

input.forEach(({ command, units }) => {
  switch (command) {
    case "forward":
      position.horizontal += units;
      break;
    case "up":
      position.depth -= units;
      break;
    case "down":
      position.depth += units;
      break;
  }
});

const total = position.horizontal * position.depth;

console.log(total);
