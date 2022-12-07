import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  for (let i = 0; i < input.length; i++) {

    let group = input.split("").slice(i, i + 4);

    let noDups = [...new Set(group)];

    if (noDups.length === group.length) {
      return i + 4;
    }
  }
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  for (let i = 0; i < input.length; i++) {

    let group = input.split("").slice(i, i + 14);

    let noDups = [...new Set(group)];

    if (noDups.length === group.length) {
      return i + 14;
    }
  }
};

run({
  part1: {
    tests: [
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 5,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 6,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 19,
      },
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 23,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
