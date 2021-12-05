import { readFileSync } from 'fs'

const input = readFileSync('src/5/input.txt').toString().split('\n')

const dayFive = (diagonals = false) => {
  const lines = input.map((line) => line.split(' -> '))

  const grid = new Map()

  for (let i = 0; i < lines.length; i++) {
    const [from, to] = lines[i]
    const [x0, y0] = from.split(',').map((a) => parseInt(a))
    const [x1, y1] = to.split(',').map((a) => parseInt(a))

    if (x0 === x1) {
      const [start, end] = [y0, y1].sort((a, b) => a - b)
      let y = start

      while (y <= end) {
        const coord = `${x0}, ${y}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        y++
      }
    } else if (y0 === y1) {
      const [start, end] = [x0, x1].sort((a, b) => a - b)
      let x = start

      while (x <= end) {
        const coord = `${x}, ${y0}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        x++
      }
    } else if (diagonals && Math.abs(x0 - x1) === Math.abs(y0 - y1)) {
      // y = mx + b
      const m = (y1 - y0) / (x1 - x0)
      const b = y0 - x0 * m

      const [start, end] = [x0, x1].sort((a, b) => a - b)
      let x = start

      while (x <= end) {
        const coord = `${x}, ${m * x + b}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        x++
      }
    }
  }

  const vals = grid.values()
  return [...vals].reduce((acc, a) => a > 1 ? acc + 1 : acc, 0)
}

console.log('part one: ', dayFive()) // 7644
console.log('part two: ', dayFive(true)) // 18627