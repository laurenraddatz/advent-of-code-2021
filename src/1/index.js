import { readFileSync } from "fs"

const input = readFileSync('src/1/input.txt').toString().split('\n').map((a) => parseInt(a))

const partOne = () => {
  let increases = 0

  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) increases++
  }

  return increases
}

const partTwo = () => {
  let increases = 0;

  for (let i = 3; i < input.length; i++) {
    const currSum = input[i - 2] + input[i - 1] + input[i]
    const prevSum = input[i - 3] + input[i - 2] + input[i - 1]

    if (currSum > prevSum) increases++
  }

  return increases
}


console.log('part one: ', partOne())
console.log('part two: ', partTwo())