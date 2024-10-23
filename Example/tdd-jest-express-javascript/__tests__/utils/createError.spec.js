// นำเข้าโมดูลที่ต้องใช้
const createError = require("../../src/utils/createError");

describe("createError", () => {
  it("should throw an error with the correct message and status code", () => {
    // Arrange: กำหนดสถานะและข้อความของข้อผิดพลาด
    const status = 404;
    const message = "Not Found";

    // Act & Assert: ตรวจสอบว่าการเรียกใช้ createError จะโยนข้อผิดพลาดที่มีสถานะและข้อความที่ถูกต้อง
    try {
      createError(status, message);
    } catch (error) {
      // ตรวจสอบว่าข้อผิดพลาดที่โยนออกมามีข้อความที่ตรงกัน
      expect(error.message).toBe(message);

      // ตรวจสอบว่าข้อผิดพลาดที่โยนออกมามีสถานะที่ตรงกัน
      expect(error.statusCode).toBe(status);
    }
  });

  it("should throw an error instance of Error", () => {
    // Arrange: กำหนดสถานะและข้อความของข้อผิดพลาด
    const status = 500;
    const message = "Internal Server Error";

    // Act & Assert: ตรวจสอบว่าข้อผิดพลาดที่โยนออกมาเป็น instance ของ Error
    try {
      createError(status, message);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});