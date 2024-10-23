# Jest `toBeTruthy()` Matcher

## คำอธิบาย

`toBeTruthy()` เป็น matcher ใน Jest ที่ใช้ตรวจสอบว่าค่าที่ทดสอบนั้น **เป็นค่าที่เป็นจริง** (truthy) หรือไม่ ใน JavaScript, ค่าที่ถือว่าจริง (truthy) ได้แก่:

- ค่าต่างๆ ที่ไม่ใช่ `false`, `0`, `''` (สตริงว่าง), `null`, `undefined`, หรือ `NaN`

## การใช้งาน

### ตัวอย่างการใช้งาน `toBeTruthy()`

1. **การตรวจสอบค่าที่เป็นจริง**

   ```javascript
   test("ตรวจสอบว่าค่าเป็นจริง", () => {
     const value = 1; // ค่านี้เป็นจริง
     expect(value).toBeTruthy();
   });


   test("ตรวจสอบว่าค่าสตริงไม่ว่างเป็นจริง", () => {
     const message = "Hello, Jest!"; // ค่านี้เป็นจริง
     expect(message).toBeTruthy();
   });

   
   test("ตรวจสอบค่า undefined เป็นเท็จ", () => {
     const value = undefined; // ค่านี้เป็นเท็จ
     expect(value).not.toBeTruthy(); // ควรใช้ .not เพื่อยืนยันว่าค่านี้ไม่เป็นจริง
   });
   ```




