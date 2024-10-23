
# การใช้ `beforeEach` ใน Jest

`beforeEach` ใน Jest ใช้สำหรับรันโค้ดบางส่วนก่อนที่จะรันแต่ละ test case ซึ่งทำให้คุณสามารถตั้งค่า (setup) หรือทำความสะอาด (cleanup) ก่อนที่แต่ละ test จะเริ่มต้นได้ ตัวอย่างเช่น การรีเซ็ตค่า, การสร้าง mock, หรือการเชื่อมต่อกับ database ใหม่ทุกครั้งก่อนการทดสอบ

## รูปแบบการใช้ `beforeEach`

```javascript
describe('Example test suite', () => {
  let counter = 0;

  beforeEach(() => {
    // โค้ดในนี้จะถูกรันก่อนทุก test case ภายใน describe block นี้
    counter = 1;
  });

  test('Test case 1', () => {
    counter++;
    expect(counter).toBe(2); // ค่าของ counter จะเป็น 2
  });

  test('Test case 2', () => {
    counter += 2;
    expect(counter).toBe(3); // ค่าของ counter จะเป็น 3
  });
});
```

## อธิบายตัวอย่าง

ในตัวอย่างนี้:

- ฟังก์ชัน `beforeEach` จะรันก่อนทุก test case ทำให้ค่า `counter` ถูกตั้งเป็น `1` ทุกครั้ง
- สำหรับ test case แรก, `counter` ถูกเพิ่มขึ้นอีก 1 ทำให้มีค่าเป็น `2`
- สำหรับ test case ที่สอง, `counter` ถูกเพิ่มขึ้นอีก `2` ทำให้มีค่าเป็น `3`

ด้วยวิธีนี้คุณสามารถทำให้แน่ใจได้ว่า test case แต่ละตัวเริ่มต้นด้วยสภาวะที่ถูกต้องและเหมือนกัน

