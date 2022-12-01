import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string): number => {
  const input = parseInput(rawInput);
  let largestSum: number = 0;
  let currentSum: number = 0;

  const lines = input.split(/\r?\n/);
  lines.forEach((line) => {
    if (line.length > 0) {
      currentSum += parseInt(line);
    } else {
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      currentSum = 0;
    }
  });

  return largestSum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000
        `,
        expected: 24000,
      },
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
