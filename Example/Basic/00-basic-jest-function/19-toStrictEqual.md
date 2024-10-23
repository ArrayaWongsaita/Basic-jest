# Jest `toStrictEqual()` Matcher

## คำอธิบาย

`toStrictEqual()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **ค่าที่ทดสอบ** มีความเท่ากันกับ **ค่าที่กำหนด** โดยตรวจสอบอย่างเข้มงวด (strict equality) ซึ่งหมายความว่า `toStrictEqual()` จะเปรียบเทียบทั้งโครงสร้างและค่าของออบเจ็กต์หรืออาร์เรย์ รวมถึงประเภทของค่าด้วย

### ความแตกต่างระหว่าง `toEqual()` และ `toStrictEqual()`

- `toEqual()` จะทำการเปรียบเทียบออบเจ็กต์หรืออาร์เรย์แบบลึก (deep equality) โดยไม่สนใจประเภทของค่า
- `toStrictEqual()` จะทำการเปรียบเทียบทั้งโครงสร้างและประเภทของค่าที่อยู่ในออบเจ็กต์หรืออาร์เรย์

## การใช้งาน

### ตัวอย่างการใช้งาน `toStrictEqual()`

1. **การตรวจสอบออบเจ็กต์ที่มีชนิดข้อมูลต่างกัน**

   ```javascript
   test("ตรวจสอบออบเจ็กต์ที่มีชนิดข้อมูลต่างกัน", () => {
     const object1 = { a: 1, b: 2 };
     const object2 = { a: "1", b: 2 }; // '1' เป็น string
     expect(object1).not.toStrictEqual(object2);
   });


   test("ตรวจสอบอาร์เรย์ที่มีประเภทต่างกัน", () => {
     const array1 = [1, 2, 3];
     const array2 = [1, "2", 3]; // '2' เป็น string
     expect(array1).not.toStrictEqual(array2);
   });
   

    test('ตรวจสอบออบเจ็กต์ที่มี Nested Properties', () => {
      const user1 = { name: 'Alice', address: { city: 'New York' } };
      const user2 = { name: 'Alice', address: { city: 'New York' } };
      expect(user1).toStrictEqual(user2);
    });


    test('ตรวจสอบออบเจ็กต์ที่มี Prototype Chain', () => {
      const obj1 = Object.create({ a: 1 });
      const obj2 = Object.create({ a: 1 });
      expect(obj1).not.toStrictEqual(obj2);
    });

    ```
