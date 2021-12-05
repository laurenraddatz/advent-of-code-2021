import { readFileSync } from 'fs'

const input = readFileSync('src/5/input.txt').toString().split('\n')

const partOne = () => {
  const grid = new Map()

  const lines = input.map((line) => line.split(' -> '))

  for (let i = 0; i < lines.length; i++) {
    const [from, to] = lines[i]
    const [x0, y0] = from.split(',').map((a) => parseInt(a))
    const [x1, y1] = to.split(',').map((a) => parseInt(a))

    if (x0 === x1) {
      const [start, end] = [y0, y1].sort((a, b) => a - b)
      let count = start

      while (count <= end) {
        const coord = `${x0}, ${count}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        count++
      }
    } else if (y0 === y1) {
      const [start, end] = [x0, x1].sort((a, b) => a - b)
      let count = start

      while (count <= end) {
        const coord = `${count}, ${y0}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        count++
      }
    }
  }

  const vals = grid.values()
  return [...vals].reduce((acc, a) => a > 1 ? acc + 1 : acc, 0) // 7644
}

const partTwo = () => {
  const lines = input.map((line) => line.split(' -> '))

  const grid = new Map()

  for (let i = 0; i < lines.length; i++) {
    const [from, to] = lines[i]
    const [x0, y0] = from.split(',').map((a) => parseInt(a))
    const [x1, y1] = to.split(',').map((a) => parseInt(a))

    if (x0 === x1) {
      const [start, end] = [y0, y1].sort((a, b) => a - b)
      let count = start

      while (count <= end) {
        const coord = `${x0}, ${count}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        count++
      }
    } else if (y0 === y1) {
      const [start, end] = [x0, x1].sort((a, b) => a - b)
      let count = start

      while (count <= end) {
        const coord = `${count}, ${y0}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        count++
      }
    } else if (Math.abs(x0 - x1) === Math.abs(y0 - y1)) {
      // y = mx + b
      const slope = (y1 - y0) / (x1 - x0)
      const b = y0 - x0 * slope

      const [start, end] = [x0, x1].sort((a, b) => a - b)
      let count = start

      while (count <= end) {
        const coord = `${count}, ${slope * count + b}`
        grid.set(coord, (grid.get(coord) ?? 0) + 1)
        count++
      }
    }
  }

  const vals = grid.values()
  return [...vals].reduce((acc, a) => a > 1 ? acc + 1 : acc, 0) // 18627
}

console.log('part one: ', partOne())
console.log('part two: ', partTwo())