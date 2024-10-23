# `toBeFinite()` ใน Jest

## คำอธิบาย
`toBeFinite()` เป็น matcher ใน Jest ที่ใช้สำหรับทดสอบว่าค่าที่ส่งมานั้นเป็น **ค่าจำนวนจำกัด (finite)** หรือไม่ ซึ่งหมายถึงค่าที่ไม่เป็น `Infinity`, `-Infinity` หรือ `NaN` (Not-a-Number)

ค่า finite คือค่าที่เป็นตัวเลขที่มีขอบเขตจำกัด ทั้งค่าบวกและค่าลบ เช่น `0`, `100`, `-25.5` แต่ไม่รวมถึง `Infinity`, `-Infinity`, หรือ `NaN`

## การใช้งาน
```javascript
test("ค่าควรเป็นจำนวนจำกัด (finite)", () => {
  const number = 42;  // ค่าจำนวนเต็ม
  expect(number).toBeFinite(); // ทดสอบว่าค่าคือ finite
});
```