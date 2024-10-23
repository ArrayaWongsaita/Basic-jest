// ฟังก์ชัน add ที่รับค่า a และ b แล้วคืนค่าผลรวมของทั้งสอง
function add(a, b) {
  return a + b;
}


// ฟังก์ชัน multiply ที่รับค่า a และ b แล้วคืนค่าผลคูณของทั้งสอง
function multiply(a, b) {
  return a * b;
}

// ฟังก์ชัน divide ที่รับค่า a และ b แล้วคืนค่าผลหารของ a หารด้วย b
// หาก b เท่ากับ 0 ให้คืนค่า NaN
function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  return a / b;
}

// ฟังก์ชัน max ที่รับค่า a และ b แล้วคืนค่าตัวเลขที่มากกว่า
function max(a, b) {
  return a > b ? a : b;
}

// ฟังก์ชัน squareRoot ที่รับค่า n แล้วคืนค่ารากที่สองของ n
// หาก n น้อยกว่า 0 ให้คืนค่า NaN
function squareRoot(n) {
  if (n < 0) {
    return NaN;
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  multiply,
  divide,
  max,
  squareRoot,
};