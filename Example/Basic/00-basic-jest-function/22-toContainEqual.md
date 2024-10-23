# Jest `toContainEqual()` Matcher

## คำอธิบาย

`toContainEqual()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **อาร์เรย์** มี **ออบเจ็กต์** หรือ **ค่าที่กำหนด** หรือไม่ โดยจะทำการตรวจสอบความเท่ากันในเชิงลึก (deep equality) ซึ่งหมายความว่าไม่เพียงแค่ตรวจสอบค่าภายนอก แต่ยังตรวจสอบค่าภายในออบเจ็กต์ที่ซ้อนอยู่ด้วย

### ความแตกต่างระหว่าง `toContain()` และ `toContainEqual()`

- `toContain()` ใช้สำหรับตรวจสอบว่ามีค่าที่กำหนดอยู่ในอาร์เรย์หรือไม่ โดยเปรียบเทียบค่าแบบธรรมดา (shallow equality)
- `toContainEqual()` จะใช้สำหรับตรวจสอบว่ามีออบเจ็กต์หรืออาร์เรย์ที่มีโครงสร้างและค่าภายในตรงกับที่กำหนด (deep equality)

## การใช้งาน

### ตัวอย่างการใช้งาน `toContainEqual()`

1. **การตรวจสอบว่าอาร์เรย์มีออบเจ็กต์ที่ตรงกับค่าที่กำหนด**

   ```javascript
   test("ตรวจสอบว่าอาร์เรย์มีออบเจ็กต์ที่ต้องการ", () => {
     const users = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
     ];
     expect(users).toContainEqual({ name: "Alice", age: 25 });
   });


   test("ตรวจสอบว่าอาร์เรย์มีออบเจ็กต์ซ้อนที่ต้องการ", () => {
     const data = [
       { id: 1, user: { name: "Charlie", age: 22 } },
       { id: 2, user: { name: "Dave", age: 28 } },
     ];
     expect(data).toContainEqual({ id: 1, user: { name: "Charlie", age: 22 } });
   });


   test("ตรวจสอบว่าค่าในอาร์เรย์ตรงกันในเชิงลึก", () => {
     const array = [
       [1, 2],
       [3, 4],
       [5, 6],
     ];
     expect(array).toContainEqual([3, 4]);
   });
   ```
