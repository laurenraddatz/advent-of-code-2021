import { readFileSync } from 'fs'

const input = readFileSync('src/4/input.txt').toString().split('\n')

const numbers = input[0].split(',')

const rawboards = input.slice(2)

const boards = rawboards.toString().split(',,')
  .map((board) => board.split(','))
  .map((board) => board.map((line) => line.split(' ')))
  .map((board) => board.map((line) => line.filter(a => a)))

const getColumn = (arr, i) => arr.map((a) => a[i]);

const partOne = () => {
  let bingo = false
  let i = 0
  let winner
  const called = []

  while(!bingo && i < numbers.length) {
    called.push(numbers[i])

    for (let j = 0; j < boards.length; j++) {
      for (let k = 0; k < boards[j].length; k++) {
        const col = getColumn(boards[j], k)
        const row = boards[j][k]

        if (col.every((v) => called.includes(v))) {
          winner = boards[j]
          bingo = true
        }
        if (row.every((v) => called.includes(v))) {
          winner = boards[j]
          bingo = true
        }
      }
    }

    i++
  }

  const unmarkedSum = winner.map((line) => line.filter((a) => !called.includes(a))).flat().reduce((acc, a) => acc + parseInt(a), 0)
  const lastCalled = called.pop()

  return unmarkedSum * parseInt(lastCalled) // 49686
}

const partTwo = () => {
  let i = 0
  const winners = []
  const called = []

  while(winners.length !== boards.length && i <= numbers.length) {
    called.push(numbers[i])

    for (let j = 0; j < boards.length; j++) {
      for (let k = 0; k < boards[j].length; k++) {
        const col = getColumn(boards[j], k)
        const row = boards[j][k]

        if (col.every((v) => called.includes(v))) {
          if (!winners.includes(j)) {
            winners.push(j)
          }
        }
        if (row.every((v) => called.includes(v))) {
          if (!winners.includes(j)) {
            winners.push(j)
          }
        }
      }
    }

    i++
  }

  const w = winners.pop()
  const winner = boards[w]

  const unmarkedSum = winner.map((line) => line.filter((a) => !called.includes(a))).flat().reduce((acc, a) => acc + parseInt(a), 0)
  const lastCalled = called.pop()

  return unmarkedSum * parseInt(lastCalled) // 26878
}

console.log('part one: ', partOne())
console.log('part two: ', partTwo())