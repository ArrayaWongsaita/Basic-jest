# Jest `toHaveLength()` Matcher

## คำอธิบาย

`toHaveLength()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **อาร์เรย์**, **สตริง** หรือ **โครงสร้างข้อมูลอื่นๆ** ที่สามารถนับจำนวนได้ (เช่น ออบเจ็กต์ที่มี property `length`) มีความยาวตามที่กำหนดหรือไม่

## การใช้งาน

### ตัวอย่างการใช้งาน `toHaveLength()`

1. **การตรวจสอบความยาวของอาร์เรย์**

   ```javascript
   test("ตรวจสอบความยาวของอาร์เรย์", () => {
     const numbers = [1, 2, 3, 4];
     expect(numbers).toHaveLength(4);
   });

   
   test("ตรวจสอบความยาวของสตริง", () => {
     const message = "Hello Jest";
     expect(message).toHaveLength(10);
   });


   test("ตรวจสอบความยาวของอาร์เรย์ที่มีออบเจ็กต์ภายใน", () => {
     const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
     expect(users).toHaveLength(3);
   });
   ```
