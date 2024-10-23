// นำเข้าโมดูลที่ต้องใช้
const httpMocks = require("node-mocks-http");
const ErrorMiddleware = require("../../src/middlewares/errorHandler.middleware");

describe("ErrorMiddleware", () => {
  let req, res, next;

  beforeEach(() => {
    // Arrange: สร้าง mock request, response, และ next function
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  it("should log the error message and return 500 status code by default", () => {
    // Arrange: สร้าง error ที่ไม่มีสถานะ
    const error = new Error("Something went wrong");

    // Mock console.log เพื่อไม่ให้แสดงข้อความบน console จริง ๆ
    jest.spyOn(console, "log").mockImplementation(() => {});

    // Act: เรียกใช้ ErrorMiddleware ด้วย error
    ErrorMiddleware(error, req, res, next);

    // Assert: ตรวจสอบว่า console.log ถูกเรียกด้วยข้อความที่ถูกต้อง
    expect(console.log).toHaveBeenCalledWith("Something went wrong");

    // ตรวจสอบว่า response มีสถานะ 500
    expect(res.statusCode).toBe(500);

    // ตรวจสอบว่า response ส่งค่า JSON ที่มีข้อความ error
    expect(res._getJSONData()).toEqual({ error: "Something went wrong" });
  });

  it("should return the status code from the error if provided", () => {
    // Arrange: สร้าง error ที่มีสถานะ 400
    const error = {
      message: "Bad Request",
      statusCode: 400,
    };

    // Act: เรียกใช้ ErrorMiddleware ด้วย error
    ErrorMiddleware(error, req, res, next);

    // Assert: ตรวจสอบว่า response มีสถานะ 400
    expect(res.statusCode).toBe(400);

    // ตรวจสอบว่า response ส่งค่า JSON ที่มีข้อความ error
    expect(res._getJSONData()).toEqual({ error: "Bad Request" });
  });
});