# `toBeCloseTo()` ใน Jest

## คำอธิบาย
`toBeCloseTo()` เป็น matcher ใน Jest ที่ใช้ทดสอบว่าค่าตัวเลขที่ได้จากการทดสอบ **ใกล้เคียง** กับค่าที่คาดหวัง โดยจะทำให้เหมาะสมกับการทดสอบตัวเลขทศนิยมที่อาจมีปัญหาการปัดเศษ

## การใช้งาน
```javascript
test("0.1 + 0.2 should be close to 0.3", () => {
  const result = 0.1 + 0.2;
  expect(result).toBeCloseTo(0.3); // ทดสอบว่าผลลัพธ์ใกล้เคียงกับ 0.3
});
```