# Jest `toStartWith()` และ `toEndWith()` Matchers

### หมายเหตุ เนื่องจาก `toStartWith()` และ `toEndWith()` ไม่ได้มาใน Jest แบบดั้งเดิม จึงต้องติดตั้งแพ็กเกจเสริมเพิ่มเติม เช่น `jest-extended` เพื่อใช้งานฟังก์ชันเหล่านี้

<br>

## คำอธิบาย

- `toStartWith()`: ใช้ในการตรวจสอบว่าสตริงที่ทดสอบนั้น **เริ่มต้น** ด้วยสตริงที่กำหนดหรือไม่
- `toEndWith()`: ใช้ในการตรวจสอบว่าสตริงที่ทดสอบนั้น **ลงท้าย** ด้วยสตริงที่กำหนดหรือไม่

**หมายเหตุ:** ทั้ง `toStartWith()` และ `toEndWith()` มักถูกใช้ใน Jest ผ่านการติดตั้งแพ็กเกจเสริมเช่น [jest-extended](https://github.com/jest-community/jest-extended) เนื่องจากไม่ใช่ matcher พื้นฐานใน Jest ปกติ

## การใช้งาน

### 1. **ตรวจสอบการเริ่มต้นด้วยสตริง (`toStartWith()`)**

````javascript
test('ตรวจสอบการเริ่มต้นของสตริงด้วย toStartWith()', () => {
  const sentence = 'Hello World';
  expect(sentence).toStartWith('Hello');
});

test('ตรวจสอบการลงท้ายของสตริงด้วย toEndWith()', () => {
const sentence = 'Hello World';
expect(sentence).toEndWith('World');
});


````

## setup files in _ package.json _ file
```json
  "jest": {
    "setupFilesAfterEnv": [
      "jest-extended/all"
    ]
  },
```
