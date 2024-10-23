# Jest `toEqual()` Matcher

## คำอธิบาย

`toEqual()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **ค่าที่ทดสอบ** มีความเท่ากันกับ **ค่าที่กำหนด** หรือไม่ โดย `toEqual()` จะทำการเปรียบเทียบค่าของออบเจ็กต์หรืออาร์เรย์แบบลึก (deep equality) แทนที่จะเป็นการเปรียบเทียบด้วยการอ้างอิง (reference equality)

### คุณสมบัติ

- เหมาะสำหรับการเปรียบเทียบออบเจ็กต์, อาร์เรย์, และค่าที่ซับซ้อนอื่นๆ
- สามารถใช้เปรียบเทียบค่าที่เป็น primitive type (เช่น string, number) ได้เช่นกัน

## การใช้งาน

### ตัวอย่างการใช้งาน `toEqual()`

1. **การตรวจสอบอาร์เรย์**

   ````javascript
   test("ตรวจสอบว่าอาร์เรย์เท่ากัน", () => {
     const array1 = [1, 2, 3];
     const array2 = [1, 2, 3];
     expect(array1).toEqual(array2);
   });


   test("ตรวจสอบว่าออบเจ็กต์เท่ากัน", () => {
     const object1 = { name: "Alice", age: 25 };
     const object2 = { name: "Alice", age: 25 };
     expect(object1).toEqual(object2);
   });


    test('ตรวจสอบว่าค่าเท่ากัน', () => {
    const value1 = 5;
    const value2 = 5;
    expect(value1).toEqual(value2);
    });


    test('ตรวจสอบออบเจ็กต์ที่มี Nested Properties', () => {
    const user1 = { name: 'Bob', address: { city: 'New York' } };
    const user2 = { name: 'Bob', address: { city: 'New York' } };
    expect(user1).toEqual(user2);
    });

   ````
