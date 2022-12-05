import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let i = 0;
  let layeredStacks: string[][] = [];
  let stacks: string[][] = [];
  let commands: number[][] = [];

  while (lines[i].startsWith("[")) {
    // no
    let stack = lines[i]
      .split(" ")
      .map((x) => x.replace("[", "").replace("]", ""))
      .map((x, i) => (x === "" && i % 2 === 0 ? "0" : x))
      .filter((x) => x !== "")
      .map((x, i) => (x === "0" && i % 2 === 0 ? "" : x))
      .filter((x) => x !== "0");
    layeredStacks.push(stack);
    i++;
  }

  for (let i = 0; i < layeredStacks.length + 1; i++) {
    let newStack: string[] = [];
    for (let j = 0; j < layeredStacks.length; j++) {
      newStack.push(layeredStacks[j][i]);
    }
    stacks.push(newStack.filter((x) => x !== "").reverse());
  }

  i += 2;

  while (i < lines.length) {
    commands.push([
      parseInt(lines[i].split(" ")[1]),
      parseInt(lines[i].split(" ")[3]) - 1,
      parseInt(lines[i].split(" ")[5]) - 1,
    ]);
    i++;
  }

  commands.forEach((command) => {
    for (let i = 0; i < command[0]; i++) {
      stacks[command[2]].push(
        stacks[command[1]][stacks[command[1]].length - 1],
      );
      stacks[command[1]].pop();
    }
  });

  let res = "";

  stacks.forEach((stack) => {
    res += stack[stack.length - 1];
  });

  return res;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let i = 0;
  let layeredStacks: string[][] = [];
  let stacks: string[][] = [];
  let commands: number[][] = [];

  while (lines[i].startsWith("[")) {
    // no
    let stack = lines[i]
      .split(" ")
      .map((x) => x.replace("[", "").replace("]", ""))
      .map((x, i) => (x === "" && i % 2 === 0 ? "0" : x))
      .filter((x) => x !== "")
      .map((x, i) => (x === "0" && i % 2 === 0 ? "" : x))
      .filter((x) => x !== "0");
    layeredStacks.push(stack);
    i++;
  }

  for (let i = 0; i < layeredStacks.length + 1; i++) {
    let newStack: string[] = [];
    for (let j = 0; j < layeredStacks.length; j++) {
      newStack.push(layeredStacks[j][i]);
    }
    stacks.push(newStack.filter((x) => x !== "").reverse());
  }

  i += 2;

  while (i < lines.length) {
    commands.push([
      parseInt(lines[i].split(" ")[1]),
      parseInt(lines[i].split(" ")[3]) - 1,
      parseInt(lines[i].split(" ")[5]) - 1,
    ]);
    i++;
  }
  console.log(stacks);

  commands.forEach((command) => {
    for (let i = command[0]; i > 0; i--) {
      stacks[command[2]].push(
        stacks[command[1]][stacks[command[1]].length - i],
      );
      stacks[command[1]].splice(stacks[command[1]].length - i, 1);

    }
  });

  let res = "";

  stacks.forEach((stack) => {
    res += stack[stack.length - 1];
  });

  return res;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
