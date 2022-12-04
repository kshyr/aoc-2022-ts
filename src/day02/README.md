# 🎄 Advent of Code 2022 🎄 <br />

## --- Day 2: Rock Paper Scissors ---

<br />

The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

<br />

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

<br />

Appreciative of your help yesterday, one Elf gives you an **encrypted strategy guide** (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: `A` for Rock, `B` for Paper, and `C` for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

<br />

The second column, you reason, must be what you should play in response: `X` for Rock, `Y` for Paper, and `Z` for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

<br />

The winner of the whole tournament is the player with the highest score. Your **total score** is the sum of your scores for each round. The score for a single round is the score for the **shape you selected** (`1` for _Rock_, `2` for _Paper_, and `3` for _Scissors_) plus the score for the **outcome of the round** (`0` if _you lost_, `3` if the round was a _draw_, and `6` if _you won_).

<br />

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

<br />

For example, suppose you were given the following strategy guide:

<br />

```
A Y
B X
C Z
```

<br />

This strategy guide predicts and recommends the following:

- In the first round, your opponent will choose Rock (`A`), and you should choose Paper (`Y`). This ends in a win for you with a score of **8** (2 because you chose Paper + 6 because you won).
- In the second round, your opponent will choose Paper (`B`), and you should choose Rock (`X`). This ends in a loss for you with a score of **1** (1 + 0).
- The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = **6**.

<br />

In this example, if you were to follow the strategy guide, you would get a total score of `15` (8 + 1 + 6).

<br />

**What would your total score be if everything goes exactly according to your strategy guide?**

<br />

_not happy with it but..._

```typescript
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
```

<br />

## 🎄 Part Two 🎄

<br />

The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: `X` means you need to lose, `Y` means you need to end the round in a draw, and `Z` means you need to win. Good luck!"

<br />

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

- In the first round, your opponent will choose Rock (`A`), and you need the round to end in a draw (`Y`), so you also choose Rock. This gives you a score of 1 + 3 = **4**.
- In the second round, your opponent will choose Paper (`B`), and you choose Rock so you lose (`X`) with a score of 1 + 0 = **1**.
- In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = **7**.

<br />

Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of **12**.

<br />

Following the Elf's instructions for the second column, **what would your total score be if everything goes exactly according to your strategy guide?**

<br />

```typescript
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
```

---

## Summary

*To be refactored...*
