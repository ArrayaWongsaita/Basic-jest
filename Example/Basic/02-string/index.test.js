// การทดสอบฟังก์ชันทั้งหมดในไฟล์เดียวโดยใช้หลักการ 3A

// Import ฟังก์ชันที่เราต้องการทดสอบ (ในกรณีที่ใช้ module, แต่ถ้าไม่ใช้ก็ไม่ต้องใส่)
const { concatStrings, toUpperCase, trimString, reverseString, capitalize } = require('./index');

// โจทย์ที่ 1: การรวมคำ
test('concatStrings should return concatenated strings', () => {
  // Arrange: เตรียมข้อมูลสำหรับทดสอบ
  const str1 = "Hello";
  const str2 = "World";
  const expected = "HelloWorld";
  
  // Act: เรียกใช้ฟังก์ชันด้วยข้อมูลที่เตรียมไว้
  const result = concatStrings(str1, str2);
  
  // Assert: ตรวจสอบผลลัพธ์ที่ได้ว่าตรงกับที่คาดหวังหรือไม่
  expect(result).toBe(expected);
});

// โจทย์ที่ 2: การแปลงเป็นตัวพิมพ์ใหญ่
test('toUpperCase should convert string to uppercase', () => {
  // Arrange
  const str = "hello";
  const expected = "HELLO";
  
  // Act
  const result = toUpperCase(str);
  
  // Assert
  expect(result).toBe(expected);
});

// โจทย์ที่ 3: การตัดช่องว่าง
test('trimString should trim spaces from both sides of the string', () => {
  // Arrange
  const str = "  hello  ";
  const expected = "hello";
  
  // Act
  const result = trimString(str);
  
  // Assert
  expect(result).toBe(expected);
});

// โจทย์ที่ 4: การกลับข้อความ
test('reverseString should return the reversed string', () => {
  // Arrange
  const str = "hello";
  const expected = "olleh";
  
  // Act
  const result = reverseString(str);
  
  // Assert
  expect(result).toBe(expected);
});

// โจทย์ที่ 5: การแปลงตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
test('capitalize should capitalize the first letter of the string', () => {
  // Arrange
  const str = "hello";
  const expected = "Hello"
  
  // Act
  const result = capitalize(str);
  
  // Assert
  expect(result).toBe(expected);
});