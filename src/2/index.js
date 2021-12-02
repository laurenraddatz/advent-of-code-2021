import { readFileSync } from "fs"

const input = readFileSync('src/2/input.txt').toString().split('\n')
  .map((a) => a.split(' '))
  .map(([a, b]) => [a, parseInt(b)])

const dayTwo = () => {
  let x = 0
  let yPartOne = 0
  let yPartTwo = 0
  let aim = 0

  for (let i = 0; i < input.length; i++) {
    const [direction, value] = input[i]

    if (direction === 'forward') {
      x += value
      yPartTwo += aim * value
    } else {
      const dir = value * (direction === 'up' ? -1 : 1)

      yPartOne += dir
      aim += dir
    }
  }

  return [yPartOne, yPartTwo].map((y) => x * y)
}

console.log('day 2: ', dayTwo())