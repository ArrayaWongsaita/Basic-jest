const fizzBuzz = require('./index');
describe('fizzBuzz', () => {
  it.each`
    input | expected
    ${3}  | ${"Fizz"}
    ${5}  | ${"Buzz"}
    ${15} | ${"FizzBuzz"}
    ${7}  | ${7}
    ${8}  | ${8}
  `('should return $expected when given $input', ({ input, expected }) => {
    expect(fizzBuzz(input)).toBe(expected);
  });
});