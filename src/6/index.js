import { readFileSync } from 'fs'

const input = readFileSync('src/6/input.txt').toString().split(',').map((a) => parseInt(a))

const countFish = (days) => {
  const fishies = new Array(9).fill(0)

  input.map((f) => fishies[f] += 1)

  for (let i = 0; i < days; i++) {
    const newFish = fishies.shift()
    fishies.push(newFish)

    fishies[6] += newFish
  }

  return fishies.reduce((acc, a) => acc + a, 0)
}

console.log('part one: ', countFish(80)) // 353079
console.log('part two: ', countFish(256)) // 1605400130036