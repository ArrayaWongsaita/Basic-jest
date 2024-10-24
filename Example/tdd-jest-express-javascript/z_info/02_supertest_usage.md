
# การใช้งาน Supertest

`Supertest` เป็นไลบรารีสำหรับการทดสอบ HTTP request ใน Node.js โดยเฉพาะการทดสอบ API ที่สร้างขึ้นด้วย Express หรือเฟรมเวิร์กอื่นๆ ที่รองรับ HTTP requests การใช้งาน `Supertest` ช่วยให้เราสามารถส่ง HTTP request ไปยังเซิร์ฟเวอร์ที่เราเขียนและตรวจสอบ response ได้โดยตรง ซึ่งจะเป็นประโยชน์อย่างมากในการทดสอบว่า API ของเราทำงานตามที่คาดหวังหรือไม่

## การใช้งาน Supertest เบื้องต้น

### 1. การติดตั้ง
ก่อนอื่นต้องติดตั้ง `supertest` โดยใช้ npm:
```bash
npm install supertest --save-dev
```

### 2. ตัวอย่างการใช้งาน
สมมติว่าเรามี API ที่สร้างด้วย Express ดังนี้:
```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'John Doe' }]);
});

module.exports = app;
```

### 3. การเขียนเทสด้วย Supertest
จากนั้นเราสามารถเขียนเทสสำหรับ API นี้ได้โดยใช้ `supertest` ดังนี้:
```javascript
const request = require('supertest');
const app = require('./app'); // import แอปของเรา

describe('GET /users', () => {
    it('ควรคืนค่า user list และ status 200', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ id: 1, name: 'John Doe' }]);
    });
});
```

ในตัวอย่างนี้:
- `request(app).get('/users')` เป็นการส่ง HTTP GET request ไปยัง endpoint `/users`
- `expect(response.status).toBe(200)` ตรวจสอบว่า status code ที่ได้รับเป็น 200
- `expect(response.body).toEqual(...)` ตรวจสอบว่า body ของ response ตรงกับข้อมูลที่คาดหวัง

### 4. การรันเทส
สามารถรันเทสโดยใช้เครื่องมือทดสอบเช่น `jest` หรือ `mocha`:
```bash
npx jest
```

`Supertest` จะทำให้การทดสอบ API ของคุณเป็นไปอย่างสะดวกและแม่นยำมากขึ้น โดยไม่จำเป็นต้องเรียกใช้เซิร์ฟเวอร์แยกต่างหากในการทดสอบ เพราะมันสามารถทำงานร่วมกับ Express app ได้โดยตรง
