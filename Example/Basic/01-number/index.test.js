// นำเข้าฟังก์ชันทั้งหมดที่ต้องการทดสอบ

const { add, multiply, divide, max, squareRoot } = require('./index');

describe('add', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
});

describe('multiply', () => {
  test('should return the product of two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});

describe('divide', () => {
  test('should return the quotient of two numbers', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
  });

  test('should return NaN if dividing by zero', () => {
    expect(divide(5, 0)).toBeNaN();
  });
});

describe('max', () => {
  test('should return the maximum of two numbers', () => {
    expect(max(4, 10)).toBe(10);
    expect(max(7, -3)).toBe(7);
    expect(max(5, 5)).toBe(5); // กรณีเท่ากัน
  });
});

describe('squareRoot', () => {
  test('should return the square root of a number', () => {
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(16)).toBe(4);
  });

  test('should return NaN for negative numbers', () => {
    expect(squareRoot(-1)).toBeNaN();
  });
});