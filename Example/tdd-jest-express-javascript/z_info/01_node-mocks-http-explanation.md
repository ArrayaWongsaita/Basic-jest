
# node-mocks-http คืออะไร ใช้สำหรับอะไร ยกตัวอย่างการใช้งาน

`node-mocks-http` เป็นไลบรารีที่ใช้สำหรับการจำลอง (mock) Request และ Response ในการทดสอบ API ใน Node.js โดยเฉพาะกับ Express.js ไลบรารีนี้ช่วยให้เราสามารถทดสอบฟังก์ชัน middleware, controller หรือ route handler ได้โดยไม่จำเป็นต้องตั้งค่าเซิร์ฟเวอร์จริงๆ ทำให้การทดสอบมีความง่ายและรวดเร็วขึ้น

## การใช้งานเบื้องต้น

### 1. การติดตั้ง:

```bash
npm install node-mocks-http --save-dev
```

### 2. ตัวอย่างการใช้งาน:
   
สมมติว่าเรามี controller ที่ชื่อ `getUser` ซึ่งรับ request และส่ง response กลับไป

```javascript
// userController.js
exports.getUser = (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.status(200).json({ id: userId, name: "John Doe" });
  } else {
    res.status(400).json({ message: "User ID is required" });
  }
};
```

เราสามารถเขียนการทดสอบโดยใช้ `node-mocks-http` ได้ดังนี้:

```javascript
const httpMocks = require('node-mocks-http');
const { getUser } = require('./userController');

test('should return user data when userId is provided', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/user/1',
    params: {
      id: '1',
    },
  });

  const res = httpMocks.createResponse();
  getUser(req, res);

  expect(res.statusCode).toBe(200);
  const data = res._getJSONData();
  expect(data).toEqual({ id: '1', name: 'John Doe' });
});

test('should return 400 error when userId is missing', () => {
  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/user',
  });

  const res = httpMocks.createResponse();
  getUser(req, res);

  expect(res.statusCode).toBe(400);
  const data = res._getJSONData();
  expect(data).toEqual({ message: 'User ID is required' });
});
```

### คำอธิบายตัวอย่าง:

- **สร้าง Request และ Response Mock:** `node-mocks-http` มีฟังก์ชัน `createRequest` และ `createResponse` เพื่อสร้างจำลองของ Request และ Response ที่คล้ายกับที่ Express.js ใช้ ทำให้สามารถทดสอบโค้ดได้โดยไม่ต้องมีเซิร์ฟเวอร์จริง
- **ส่งค่าให้ controller:** เรียกใช้ฟังก์ชัน `getUser` โดยส่งค่า `req` และ `res` ที่ถูกจำลองไปให้
- **ตรวจสอบผลลัพธ์:** ใช้ Jest ในการตรวจสอบค่า `statusCode` และข้อมูลที่ได้จาก `res._getJSONData()` เพื่อให้แน่ใจว่าผลลัพธ์ตรงตามที่คาดหวัง

`node-mocks-http` ช่วยให้การทดสอบ API ทำได้ง่ายและมีประสิทธิภาพมากขึ้น เพราะไม่ต้องเสียเวลาในการสร้างเซิร์ฟเวอร์และส่ง request จริงๆ ในระหว่างการทดสอบ
