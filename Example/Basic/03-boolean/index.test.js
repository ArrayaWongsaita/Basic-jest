// การทดสอบฟังก์ชันทั้งหมดในไฟล์เดียวโดยใช้หลักการ 3A
const { isEven, isEmptyString, isPositive, isAllUpperCase ,containsWord} = require('./index');
// โจทย์ที่ 1: ตรวจสอบว่าเป็นเลขคู่
test('isEven should return true for even numbers', () => {
  // Arrange: เตรียมข้อมูลสำหรับทดสอบ
  const num = 4;
  
  // Act: เรียกใช้ฟังก์ชันด้วยข้อมูลที่เตรียมไว้
  const result = isEven(num);
  
  // Assert: ตรวจสอบผลลัพธ์ที่ได้ว่าตรงกับที่คาดหวังหรือไม่
  expect(result).toBe(true);
});

test('isEven should return false for odd numbers', () => {
  // Arrange
  const num = 5;
  
  // Act
  const result = isEven(num);
  
  // Assert
  expect(result).toBe(false);
});

// โจทย์ที่ 2: ตรวจสอบว่าเป็นข้อความว่าง
test('isEmptyString should return true for empty strings', () => {
  // Arrange
  const str = "";
  
  // Act
  const result = isEmptyString(str);
  
  // Assert
  expect(result).toBe(true);
});

test('isEmptyString should return false for non-empty strings', () => {
  // Arrange
  const str = "Hello";
  
  // Act
  const result = isEmptyString(str);
  
  // Assert
  expect(result).toBe(false);
});

// โจทย์ที่ 3: ตรวจสอบว่าเป็นจำนวนบวก
test('isPositive should return true for positive numbers', () => {
  // Arrange
  const num = 5;
  
  // Act
  const result = isPositive(num);
  
  // Assert
  expect(result).toBe(true);
});

test('isPositive should return false for zero', () => {
  // Arrange
  const num = 0;
  
  // Act
  const result = isPositive(num);
  
  // Assert
  expect(result).toBe(false);
});

test('isPositive should return false for negative numbers', () => {
  // Arrange
  const num = -3;
  
  // Act
  const result = isPositive(num);
  
  // Assert
  expect(result).toBe(false);
});

// โจทย์ที่ 4: ตรวจสอบว่ามีคำในข้อความ
test('containsWord should return true if word is present in the string', () => {
  // Arrange
  const str = "Hello world";
  const word = "world";
  
  // Act
  const result = containsWord(str, word);
  
  // Assert
  expect(result).toBe(true);
});

test('containsWord should return false if word is not present in the string', () => {
  // Arrange
  const str = "Hello world";
  const word = "JavaScript";
  
  // Act
  const result = containsWord(str, word);
  
  // Assert
  expect(result).toBe(false);
});

// โจทย์ที่ 5: ตรวจสอบว่าเป็นตัวพิมพ์ใหญ่ทั้งหมด
test('isAllUpperCase should return true if all characters are uppercase', () => {
  // Arrange
  const str = "HELLO";
  
  // Act
  const result = isAllUpperCase(str);
  
  // Assert
  expect(result).toBe(true);
});

test('isAllUpperCase should return false if not all characters are uppercase', () => {
  // Arrange
  const str = "Hello";
  
  // Act
  const result = isAllUpperCase(str);
  
  // Assert
  expect(result).toBe(false);
});

test('isAllUpperCase should return false for an empty string', () => {
  // Arrange
  const str = "";
  
  // Act
  const result = isAllUpperCase(str);
  
  // Assert
  expect(result).toBe(false);
});