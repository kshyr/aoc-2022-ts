import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const outcome = (yourChoice: string, roundScore: number): number => {

  return roundScore;
}

const part1 = (rawInput: string): number => {
  const input = parseInput(rawInput);
  let score = 0;

  let lines = input.split(/\r?\n/);
  lines.forEach((line) => {
    let round = line.split(" ");
    let roundScore = 0;
    switch (round[0]) {
      case "A":
        switch (round[1]) {
          case "X":
            roundScore = 1 + 0;
            break;
          case "Y":
            roundScore = 2 + 3;
            break;
          case "Z":
            roundScore = 3 + 6;
            break;
        }
        break;
      case "B":
        switch (round[1]) {
          case "X":
            roundScore = 1 + 0;
            break;
          case "Y":
            roundScore = 2 + 3;
            break;
          case "Z":
            roundScore = 3 + 6;
            break;
        }
        break;
      case "C":
        switch (round[1]) {
          case "X":
            roundScore = 1 + 0;
            break;
          case "Y":
            roundScore = 2 + 3;
            break;
          case "Z":
            roundScore = 3 + 6;
            break;
        }
        break;
      }
    score += roundScore;
  });
  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let score = 0;

  let lines = input.split(/\r?\n/);
  lines.forEach((line) => {
    let round = line.split(" ");
    let roundScore = 0;
    switch (round[0]) {
      case "A":
        switch (round[1]) {
          case "X":
            roundScore = 3 + 0;
            break;
          case "Y":
            roundScore = 1 + 3;
            break;
          case "Z":
            roundScore = 2 + 6;
            break;
        }
        break;
      case "B":
        switch (round[1]) {
          case "X":
            roundScore = 1 + 0;
            break;
          case "Y":
            roundScore = 2 + 3;
            break;
          case "Z":
            roundScore = 3 + 6;
            break;
        }
        break;
      case "C":
        switch (round[1]) {
          case "X":
            roundScore = 2 + 0;
            break;
          case "Y":
            roundScore = 3 + 3;
            break;
          case "Z":
            roundScore = 1 + 6;
            break;
        }
        break;
      }
    score += roundScore;
  });
  return score;

};

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
