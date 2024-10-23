// นำเข้าโมดูลที่ต้องใช้
const httpMocks = require("node-mocks-http");
const createError = require("../../src/utils/createError");
const notFound = require("../../src/middlewares/notFound.middleware");

// Mock ฟังก์ชัน createError
jest.mock("../../src/utils/createError");

describe("notFound Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    // Arrange: สร้าง mock request, response, และ next function
    req = httpMocks.createRequest({
      method: "GET",
      originalUrl: "/non-existent-route",
    });
    res = httpMocks.createResponse();
    next = jest.fn(); // Mock next function สำหรับการจัดการข้อผิดพลาด
  });

  it("should call createError with status 404 and correct message", () => {
    // Act: เรียกใช้ notFound middleware
    notFound(req, res, next);

    // Assert: ตรวจสอบว่าถูกเรียกใช้ createError ด้วยสถานะ 404 และข้อความที่ถูกต้อง
    expect(createError).toHaveBeenCalledWith(404, "Not Found - /non-existent-route");
  });

  it("should call next with the error", () => {
    // Arrange: สร้าง error จำลอง
    const error = new Error("Not Found - /non-existent-route");
    createError.mockImplementation(() => {
      throw error;
    });

    // Act: เรียกใช้ notFound middleware
    notFound(req, res, next);

    // Assert: ตรวจสอบว่า next ถูกเรียกด้วยข้อผิดพลาด
    expect(next).toHaveBeenCalledWith(error);
  });
});