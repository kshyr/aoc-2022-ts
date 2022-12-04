import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let res = 0;
  lines.forEach((line) => {
    let pair1 = line.split(",")[0];
    let pair2 = line.split(",")[1];
    
    let pair1XInt = parseInt(pair1.split("-")[0]);
    let pair1YInt = parseInt(pair1.split("-")[1]);
    let pair2XInt = parseInt(pair2.split("-")[0]);
    let pair2YInt = parseInt(pair2.split("-")[1]);

    if (pair1XInt <= pair2XInt && pair1YInt >= pair2YInt) {
      res++;
    } else if (pair1XInt >= pair2XInt && pair1YInt <= pair2YInt) {
      res++;
    }
  
  });
  return res;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let lines = input.split(/\r?\n/);
  let res = 0;
  lines.forEach((line) => {
    let pair1 = line.split(",")[0];
    let pair2 = line.split(",")[1];
    
    let pair1XInt = parseInt(pair1.split("-")[0]);
    let pair1YInt = parseInt(pair1.split("-")[1]);
    let pair2XInt = parseInt(pair2.split("-")[0]);
    let pair2YInt = parseInt(pair2.split("-")[1]);

    if (pair1YInt >= pair2XInt && pair1XInt <= pair2YInt) {
      res++;
    } else if (pair1XInt >= pair2YInt && pair1YInt <= pair2XInt) {
      res++;
    }
  });
  return res;
};

run({
  part1: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 4,
      },
      {
        input: `
        5-90,4-90
        52-52,3-51
        46-81,45-80
        15-48,49-75
        14-81,14-81
        23-44,23-37
        60-60,48-61
        `,
        expected: 5,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
