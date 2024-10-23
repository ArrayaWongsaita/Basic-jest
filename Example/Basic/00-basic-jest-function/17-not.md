# Jest `not` Modifier

## คำอธิบาย

`not` modifier ใน Jest เป็นวิธีการที่ใช้เพื่อเปลี่ยนแปลงผลลัพธ์ของ matcher ให้อยู่ในรูปแบบตรงกันข้าม โดยใช้ `not` คุณสามารถตรวจสอบว่าเงื่อนไขที่คุณทดสอบนั้น **ไม่เป็นจริง** แทนที่จะเป็นจริง

## การใช้งาน

### ตัวอย่างการใช้งาน `not` Modifier

1. **ใช้กับ `toBe()`**

   ```javascript
   test("ตรวจสอบว่าค่าไม่เป็น 5", () => {
     const value = 10;
     expect(value).not.toBe(5);
   });


   test("ตรวจสอบว่าอาร์เรย์ไม่เท่ากับ [1, 2, 3]", () => {
     const numbers = [1, 2, 4];
     expect(numbers).not.toEqual([1, 2, 3]);
   });


    test('ตรวจสอบว่าค่าไม่เป็นจริง', () => {
    const value = 0; // ค่านี้ไม่เป็นจริง
    expect(value).not.toBeTruthy();
    });


    test('ตรวจสอบว่าค่าไม่เป็นเท็จ', () => {
    const value = 1; // ค่านี้เป็นจริง
    expect(value).not.toBeFalsy();
    });

   ```
