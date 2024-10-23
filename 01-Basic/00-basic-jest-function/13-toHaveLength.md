# Jest `toHaveLength()` Matcher

## คำอธิบาย

`toHaveLength()` เป็น matcher ใน Jest ที่ใช้ตรวจสอบว่า **ออบเจ็กต์** ที่ทดสอบ เช่น **อาร์เรย์** หรือ **สตริง** มีความยาว (length) เท่ากับค่าที่กำหนดหรือไม่

- สามารถใช้กับอาร์เรย์ สตริง หรือแม้กระทั่งออบเจ็กต์อื่น ๆ ที่มีคุณสมบัติ `length` เช่น NodeList หรือ arguments

## การใช้งาน

1. **ตรวจสอบความยาวของอาร์เรย์**

   ```javascript
   test("ตรวจสอบความยาวของอาร์เรย์", () => {
     const numbers = [1, 2, 3, 4];
     expect(numbers).toHaveLength(4);
   });

   test("ตรวจสอบความยาวของสตริง", () => {
     const word = "Jest";
     expect(word).toHaveLength(4);
   });
   ```
