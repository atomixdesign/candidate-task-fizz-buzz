/**
 * @param start number
 * @param end number
 * @returns [{
 *   input: number
 *   output: string
 * }]
 */
module.exports = (start, end) => {
  var result = []
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push({ input: i, output: 'FizzBuzz' })
    }
    else if (i % 3 === 0) {
      result.push({ input: i, output: 'Fizz' })
    }
    else if (i % 5 === 0) {
      result.push({ input: i, output: 'Buzz' })
    }
    else {
      result.push({ input: i, output: '' })
    }
  }
  return result
}