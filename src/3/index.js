import { readFileSync } from "fs"

const input = readFileSync('src/3/input.txt').toString().split('\n').map((a) => a.split('').map((b) => parseInt(b)))

const transpose = (m) => m[0].map((a, i) => m.map((a) => a[i]))

const getMostFrequent = (m) => (
  m.map((bits) => bits.reduce((acc, bit) => {
    if (bit === 1) return acc + 1
    else return acc - 1
  }, 0))
  .map((weight) => weight >= 0 ? 1 : 0)
)

const partOne = () => {
  const gamma = []
  const epsilon = []

  const matrix = transpose(input)
  const mosts = getMostFrequent(matrix)

  for (const bit of mosts) {
    gamma.push(bit)
    epsilon.push(bit === 0 ? 1 : 0)
  }

  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2) // 3813416
}

console.log('part one:', partOne())

const partTwo = () => {
  let oxy = input
  for (let i = 0; oxy.length > 1; i++) {
    const matrix = transpose(oxy)
    const mosts = getMostFrequent(matrix)

    oxy = oxy.filter((bit) => bit[i] === mosts[i])
  }

  let co2 = input
  for (let i = 0; co2.length > 1; i++) {
    const matrix = transpose(co2)
    const mosts = getMostFrequent(matrix)

    co2 = co2.filter((bit) => bit[i] !== mosts[i])
  }

  return parseInt(oxy[0].join(''), 2) * parseInt(co2[0].join(''), 2) // 2990784
}

console.log('part two:', partTwo())