# Jest `toHaveProperty()` Matcher

## คำอธิบาย

`toHaveProperty()` เป็น matcher ใน Jest ที่ใช้สำหรับตรวจสอบว่า **ออบเจ็กต์** มี **คุณสมบัติ** (property) ที่กำหนดไว้หรือไม่ โดยสามารถใช้เพื่อยืนยันว่าคุณสมบัติที่ต้องการมีอยู่ในออบเจ็กต์ และสามารถตรวจสอบค่าของคุณสมบัตินั้นได้ด้วย

## การใช้งาน

### ตัวอย่างการใช้งาน `toHaveProperty()`

1. **การตรวจสอบคุณสมบัติที่มีอยู่ในออบเจ็กต์**

   ```javascript
   test("ตรวจสอบว่าออบเจ็กต์มีคุณสมบัติ name", () => {
     const user = { name: "Alice", age: 25 };
     expect(user).toHaveProperty("name");
   });

   test("ตรวจสอบว่าออบเจ็กต์มีคุณสมบัติ age และค่าที่ถูกต้อง", () => {
     const user = { name: "Bob", age: 30 };
     expect(user).toHaveProperty("age", 30);
   });


    test('ตรวจสอบว่าออบเจ็กต์มีคุณสมบัติ address.city', () => {
    const user = { name: 'Charlie', address: { city: 'New York' } };
    expect(user).toHaveProperty('address.city');
    });

    test('ตรวจสอบว่าคุณสมบัติ email ไม่อยู่ในออบเจ็กต์', () => {
    const user = { name: 'Dave', age: 28 };
    expect(user).not.toHaveProperty('email');
    });

    ```
