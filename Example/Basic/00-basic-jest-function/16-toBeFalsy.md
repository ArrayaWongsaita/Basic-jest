# Jest `toBeFalsy()` Matcher

## คำอธิบาย

`toBeFalsy()` เป็น matcher ใน Jest ที่ใช้ตรวจสอบว่าค่าที่ทดสอบนั้น **เป็นค่าที่ไม่เป็นจริง** (falsy) หรือไม่ ใน JavaScript, ค่าที่ถือว่ามีความไม่เป็นจริง (falsy) ได้แก่:

- `false`
- `0`
- `''` (สตริงว่าง)
- `null`
- `undefined`
- `NaN`

## การใช้งาน

### ตัวอย่างการใช้งาน `toBeFalsy()`

1. **การตรวจสอบค่าที่ไม่เป็นจริง**

```javascript

   test('ตรวจสอบว่าค่าเป็นเท็จ', () => {
     const value = false; // ค่านี้เป็นเท็จ
     expect(value).toBeFalsy();
   });

     test('ตรวจสอบค่าสตริงว่างเป็นเท็จ', () => {
  const message = ''; // ค่านี้เป็นเท็จ
  expect(message).toBeFalsy();
  });


  test('ตรวจสอบค่า null เป็นเท็จ', () => {
  const value = null; // ค่านี้เป็นเท็จ
  expect(value).toBeFalsy();
  });

```