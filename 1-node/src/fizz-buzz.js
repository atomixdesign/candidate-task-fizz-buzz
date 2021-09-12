/**
 * @param start number
 * @param end number
 * @returns [{
 *   input: number
 *   output: string
 * }]
 */
module.exports = (start, end) => {
  const result = [];
  for (start; end >= start;  ++start) {
    const data = {
      input: start,
      output: ( start%3 ? '' : 'Fizz' ) + ( start%5 ? '' : 'Buzz' ) || '',
    };
    result.push(data);
  }
  return result;
}