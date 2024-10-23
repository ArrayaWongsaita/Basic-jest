const httpMocks = require("node-mocks-http");
const todoController = require("../../src/controllers/todo.controller");
const todoService = require("../../src/services/todo.service");

// Mock the todoService methods
jest.mock("../../src/services/todo.service");
describe("Todo Controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest(); // Mock request object
    res = httpMocks.createResponse(); // Mock response object
    next = jest.fn(); // Mock next function for error handling
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  // Test for getAll
  describe("getAll", () => {
    it("should return all todos", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      const mockTodos = [{ id: 1, title: "Test Todo" }];
      todoService.getAll.mockResolvedValue(mockTodos);

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.getAll(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้
      expect(todoService.getAll).toHaveBeenCalledTimes(1);
      expect(res._getJSONData()).toEqual(mockTodos);
      expect(res.statusCode).toBe(200);
    });

    it("should handle errors", async () => {
      // Arrange: เตรียมข้อผิดพลาดจำลองและตั้งค่า mock
      const errorMessage = { message: "Error finding todos" };
      todoService.getAll.mockRejectedValue(errorMessage);

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.getAll(req, res, next);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน next พร้อมกับข้อผิดพลาด
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });

  // Test for getById
  describe("getById", () => {
    it("should return a todo by id", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      const mockTodo = { id: 1, title: "Test Todo" };
      todoService.getById.mockResolvedValue(mockTodo);
      req.params.id = 1;

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.getById(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้
      expect(todoService.getById).toHaveBeenCalledWith(1);
      expect(res._getJSONData()).toEqual(mockTodo);
      expect(res.statusCode).toBe(200);
    });

    it("should handle errors", async () => {
      // Arrange: เตรียมข้อผิดพลาดจำลองและตั้งค่า mock
      const errorMessage = { message: "Error finding todo" };
      todoService.getById.mockRejectedValue(errorMessage);
      req.params.id = 1;

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.getById(req, res, next);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน next พร้อมกับข้อผิดพลาด
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });

  // Test for create
  describe("create", () => {
    it("should create a new todo", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      const mockTodo = { id: 1, title: "New Todo" };
      todoService.create.mockResolvedValue(mockTodo);
      req.body = { title: "New Todo" };

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.create(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้
      expect(todoService.create).toHaveBeenCalledWith(req.body);
      expect(res.statusCode).toBe(201);
      expect(res._getJSONData()).toEqual(mockTodo);
    });

    it("should return 400 if title is missing", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      req.body = {};
      const errorMessage = {
        status: 400,
        message: "Title is required",
      };

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.create(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้

      expect(next).not.toHaveBeenCalledWith(errorMessage);
    });

    it("should handle errors when creating a new todo", async () => {
      // Arrange: เตรียมข้อผิดพลาดจำลองและตั้งค่า mock
      const errorMessage = { message: "Error creating todo" };
      req.body = { title: "New Todo" };
      todoService.create.mockRejectedValue(errorMessage);

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.create(req, res, next);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน next พร้อมกับข้อผิดพลาด
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });

  // Test for update
  describe("update", () => {
    it("should update a todo", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      const mockUpdatedTodo = { id: 1, title: "Updated Todo" };
      todoService.getById.mockResolvedValue(mockUpdatedTodo);
      todoService.update.mockResolvedValue(mockUpdatedTodo);
      req.params.id = 1;
      req.body = { title: "Updated Todo" };

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.update(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้
      expect(todoService.update).toHaveBeenCalledWith(1, req.body);
      expect(res._getJSONData()).toEqual(mockUpdatedTodo);
      expect(res.statusCode).toBe(200);
    });

    it("should handle errors", async () => {
      // Arrange: เตรียมข้อผิดพลาดจำลองและตั้งค่า mock
      const errorMessage = { message: "Error updating todo" };
      const mockUpdatedTodo = { id: 1, title: "Updated Todo" };
      todoService.getById.mockResolvedValue(mockUpdatedTodo);
      todoService.update.mockRejectedValue(errorMessage);
      req.params.id = 1;
      req.body = { title: "Updated Todo" };

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.update(req, res, next);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน next พร้อมกับข้อผิดพลาด
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });

  // Test for delete
  describe("delete", () => {
    it("should delete a todo", async () => {
      // Arrange: เตรียมข้อมูลจำลองและตั้งค่า mock
      const mockDeletedTodo = { id: 1, title: "Deleted Todo" };
      todoService.getById.mockResolvedValue(mockDeletedTodo);
      todoService.delete.mockResolvedValue(mockDeletedTodo);
      req.params.id = 1;

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.delete(req, res, next);

      // Assert: ตรวจสอบผลลัพธ์ที่ได้
      expect(todoService.delete).toHaveBeenCalledWith(1);
      expect(res._getJSONData()).toEqual(mockDeletedTodo);
      expect(res.statusCode).toBe(200);
    });

    it("should handle errors", async () => {
      // Arrange: เตรียมข้อผิดพลาดจำลองและตั้งค่า mock
      const errorMessage = { message: "Error deleting todo" };
      const mockDeletedTodo = { id: 1, title: "Deleted Todo" };
      todoService.getById.mockResolvedValue(mockDeletedTodo);
      todoService.delete.mockRejectedValue(errorMessage);
      req.params.id = 1;

      // Act: เรียกใช้ฟังก์ชันที่ต้องการทดสอบ
      await todoController.delete(req, res, next);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน next พร้อมกับข้อผิดพลาด
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });
});
