import { readFileSync } from "fs"

const input = readFileSync('src/1/input.txt').toString().split('\n').map((a) => parseInt(a))

const getIncreases = (indexSize) => input.reduce((count, curr, i, acc) => i >= indexSize && curr > acc[i - indexSize] ? count + 1 : count, 0)

console.log('part one: ', getIncreases(1))
console.log('part two: ', getIncreases(3))