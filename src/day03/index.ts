import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const getPriority = (char: string): number => {
  return char === char.toUpperCase()
    ? char.charCodeAt(0) - 96 + 32 + 26
    : char.charCodeAt(0) - 96;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let sum = 0;

  lines.forEach((line) => {
    let half = line.length / 2;
    let firstHalf = line.split("").slice(0, half);
    let secondHalf = line.split("").slice(half);

    let dup = firstHalf.filter((char) => {
      if (secondHalf.includes(char)) return char;
    })[0];

    sum += getPriority(dup);
  });

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let sum = 0;
  let group: string[][] = [];

  lines.forEach((line) => {
    group.push(line.split(""));

    if (group.length === 3) {
      let dup = group[0].filter((char) => {
        if (group[1].includes(char) && group[2].includes(char)) return char;
      })[0];

      sum += getPriority(dup);
      group = [];
    }
  });

  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
