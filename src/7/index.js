import { readFileSync } from 'fs'

const input = readFileSync('src/7/input.txt').toString().split(',').map((a) => parseInt(a))

const partOne = () => {
  // too lazy to refactor and use the median or whtvr
  const distances = new Map()

  for (let i = 0; i < input.length; i++) {
    distances.set(
      i,
      input
        .map((position) => Math.abs(position - input[i]))
        .reduce((acc, a) => acc + a, 0)
    )
  }

  return Math.min(...distances.values())
}

const getFuel = (num) => (
  Array(num + 1)
    .fill(0)
    .reduce((acc, _, i) => acc + i, 0)
)

const getAvg = (arr) => arr.reduce((acc, a) => acc + a, 0) / arr.length

const partTwo = () => (
  // i let prettier format it idk
  Math.min(
    ...[Math.floor(getAvg(input)), Math.ceil(getAvg(input))].map((avg) =>
      input
        .map((position) => getFuel(Math.abs(position - avg)))
        .reduce((acc, a) => acc + a, 0)
    )
  )
)

console.log('part one: ', partOne()) // 328262
console.log('part two:', partTwo()) // 90040997