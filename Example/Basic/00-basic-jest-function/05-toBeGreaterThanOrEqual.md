# `toBeGreaterThanOrEqual()` ใน Jest

## คำอธิบาย
`toBeGreaterThanOrEqual()` เป็น matcher ใน Jest ที่ใช้ตรวจสอบว่าค่าที่ทดสอบนั้น **มากกว่าหรือเท่ากับ** ค่าที่คาดหวังหรือไม่ ซึ่งเหมาะสำหรับการเปรียบเทียบตัวเลข (Numbers) หรือค่าที่สามารถแปลงเป็นตัวเลขได้

## รูปแบบการใช้งาน
```javascript
test("ทดสอบว่าค่าที่ได้มากกว่าหรือเท่ากับ 5", () => {
  const result = 5;
  expect(result).toBeGreaterThanOrEqual(5); // ทดสอบว่าค่ามากกว่าหรือเท่ากับ 5
});
```