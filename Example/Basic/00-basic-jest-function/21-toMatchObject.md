# Jest `toMatchObject()` Matcher

## คำอธิบาย

`toMatchObject()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **ออบเจ็กต์** ที่ทดสอบมีคุณสมบัติและค่าที่กำหนดไว้ใน **ออบเจ็กต์เปรียบเทียบ** หรือไม่ โดย `toMatchObject()` จะทำการเปรียบเทียบออบเจ็กต์ในแบบลึก (deep comparison) ซึ่งหมายความว่า คุณสามารถตรวจสอบเฉพาะบางส่วนของออบเจ็กต์ได้โดยไม่จำเป็นต้องมีความเท่ากันทั้งหมด

## การใช้งาน

### ตัวอย่างการใช้งาน `toMatchObject()`

1. **การตรวจสอบออบเจ็กต์ที่มีคุณสมบัติบางส่วน**

   ```javascript
   test("ตรวจสอบว่าออบเจ็กต์มีคุณสมบัติที่ต้องการ", () => {
     const user = { name: "Alice", age: 25, email: "alice@example.com" };
     expect(user).toMatchObject({ name: "Alice" });
   });


   test("ตรวจสอบว่าออบเจ็กต์มีคุณสมบัติ address.city", () => {
     const user = {
       name: "Charlie",
       address: { city: "New York", zip: "10001" },
     };
     expect(user).toMatchObject({ address: { city: "New York" } });
   });


    test('ตรวจสอบว่าออบเจ็กต์ไม่ตรงกับค่า', () => {
      const user = { name: 'Dave', age: 28 };
      expect(user).not.toMatchObject({ name: 'Eve' });
    });
    ```
