// โจทย์ที่ 1: ตรวจสอบว่าเป็นเลขคู่
// ฟังก์ชันนี้จะตรวจสอบว่าตัวเลขเป็นเลขคู่หรือไม่
function isEven(num) {
  return num % 2 === 0;
}

// โจทย์ที่ 2: ตรวจสอบว่าเป็นข้อความว่าง
// ฟังก์ชันนี้จะตรวจสอบว่าข้อความเป็นข้อความว่างหรือไม่
function isEmptyString(str) {
  return str === "";
}

// โจทย์ที่ 3: ตรวจสอบว่าเป็นจำนวนบวก
// ฟังก์ชันนี้จะตรวจสอบว่าตัวเลขเป็นจำนวนบวกหรือไม่
function isPositive(num) {
  return num > 0;
}

// โจทย์ที่ 4: ตรวจสอบว่ามีคำในข้อความ
// ฟังก์ชันนี้จะตรวจสอบว่าข้อความมีคำที่กำหนดอยู่หรือไม่
function containsWord(str, word) {
  return str.includes(word);
}

// โจทย์ที่ 5: ตรวจสอบว่าเป็นตัวพิมพ์ใหญ่ทั้งหมด
// ฟังก์ชันนี้จะตรวจสอบว่าข้อความทั้งหมดเป็นตัวพิมพ์ใหญ่หรือไม่
function isAllUpperCase(str) {
  return str === str.toUpperCase() && str !== "";
}



module.exports = {
  containsWord,
  isEven,
  isEmptyString,
  isPositive,
  containsWord,
  isAllUpperCase
}