const fizzBuzz = require("./fizz-buzz");

let [_node, _script, startOrEnd, maybeEnd] = process.argv;
let start = maybeEnd ? startOrEnd : 1;
let end = maybeEnd ? maybeEnd : startOrEnd;

const calculations = fizzBuzz(start, end);

console.log(`Calculating FizzBuzz from ${start} to ${end}...`);

for (let { input, output } of calculations) {
  console.log(`${input}: ${output}`);
}
