const sortNumbers = require('./index'); // นำเข้าฟังก์ชันที่ต้องการทดสอบ

describe('sortNumbers', () => {
  // กำหนดชุดข้อมูลทดสอบโดยใช้ it.each
  it.each([
    [[5, 2, 8, 3, 1], [1, 2, 3, 5, 8]],
    [[12, 4, 7, 9], [4, 7, 9, 12]],
    [[1, 2, 3], [1, 2, 3]],
    [[3, -2, 0], [-2, 0, 3]],
    [[], []], // กรณีอาร์เรย์ว่าง
    [[5], [5]], // กรณีอาร์เรย์ที่มีตัวเลขเพียงตัวเดียว
  ])('should return %s when given %s', (input, expected) => {
    // Arrange: เตรียมข้อมูล
    // input และ expected ถูกส่งมาจาก it.each

    // Act: เรียกใช้ฟังก์ชัน sortNumbers ด้วย input
    const result = sortNumbers(input);

    // Assert: ตรวจสอบผลลัพธ์ว่าตรงกับค่า expected หรือไม่
    expect(result).toEqual(expected);
  });
});



describe('sortNumbers2', () => {
  // กำหนดชุดข้อมูลทดสอบโดยใช้ it.each ในรูปแบบ Template Literal
  it.each`
    input            | expected
    ${[5, 2, 8, 3, 1]} | ${[1, 2, 3, 5, 8]}
    ${[12, 4, 7, 9]}   | ${[4, 7, 9, 12]}
    ${[1, 2, 3]}       | ${[1, 2, 3]}
    ${[3, -2, 0]}      | ${[-2, 0, 3]}
    ${[]}              | ${[]}
    ${[5]}             | ${[5]}
  `('should return $expected when given $input', ({ input, expected }) => {
    // Arrange: เตรียมข้อมูล (input และ expected)
    
    // Act: เรียกใช้ฟังก์ชัน sortNumbers ด้วย input
    const result = sortNumbers(input);
    
    // Assert: ตรวจสอบผลลัพธ์ว่าตรงกับค่า expected หรือไม่
    expect(result).toEqual(expected);
  });
});