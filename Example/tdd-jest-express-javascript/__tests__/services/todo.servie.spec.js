// นำเข้าโมเดล todoModel และ service todoService
const todoModel = require("../../src/models/todo.model");
const todoService = require("../../src/services/todo.service");

// Mock ฟังก์ชันทั้งหมดใน todoModel
jest.mock("../../src/models/todo.model");

describe("todoService", () => {
  // เคลียร์ mock data ก่อนการทดสอบแต่ละชุด
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // การทดสอบฟังก์ชัน 'getAll'
  describe("getAll", () => {
    it("should call todoModel.getAll once", async () => {
      // Arrange: ไม่มีข้อมูลที่ต้องเตรียมสำหรับกรณีนี้

      // Act: เรียกใช้ฟังก์ชัน getAll ของ todoService
      await todoService.getAll();

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน getAll ของ todoModel 1 ครั้ง
      expect(todoModel.getAll).toHaveBeenCalledTimes(1);
    });

    it("should return all todos", async () => {
      // Arrange: กำหนดค่าจำลองสำหรับการคืนค่า
      const mockTodos = [{ id: 1, title: "Test Todo" }];
      todoModel.getAll.mockResolvedValue(mockTodos);

      // Act: เรียกใช้ฟังก์ชัน getAll และรับค่าผลลัพธ์
      const todos = await todoService.getAll();

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับค่าจำลองที่ตั้งไว้
      expect(todos).toEqual(mockTodos);
    });
  });

  // การทดสอบฟังก์ชัน 'getById'
  describe("getById", () => {
    it("should call todoModel.getById once with correct id", async () => {
      // Arrange: กำหนดค่า id ที่จะใช้ในการทดสอบ
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน getById ของ todoService ด้วย id
      await todoService.getById(id);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน getById ของ todoModel ด้วย id ที่ถูกต้อง 1 ครั้ง
      expect(todoModel.getById).toHaveBeenCalledWith(id);
      expect(todoModel.getById).toHaveBeenCalledTimes(1);
    });

    it("should return the correct todo by id", async () => {
      // Arrange: กำหนดค่าจำลองสำหรับการคืนค่า
      const mockTodo = { id: 1, title: "Test Todo" };
      todoModel.getById.mockResolvedValue(mockTodo);

      // Act: เรียกใช้ฟังก์ชัน getById และรับค่าผลลัพธ์
      const todo = await todoService.getById(1);

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับค่าจำลองที่ตั้งไว้
      expect(todo).toEqual(mockTodo);
    });
  });

  // การทดสอบฟังก์ชัน 'create'
  describe("create", () => {
    it("should call todoModel.create with correct data", async () => {
      // Arrange: กำหนดข้อมูลจำลองสำหรับการสร้าง todo ใหม่
      const data = { title: "New Todo" };

      // Act: เรียกใช้ฟังก์ชัน create ของ todoService ด้วยข้อมูลจำลอง
      await todoService.create(data);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน create ของ todoModel ด้วยข้อมูลที่ถูกต้อง 1 ครั้ง
      expect(todoModel.create).toHaveBeenCalledWith(data);
      expect(todoModel.create).toHaveBeenCalledTimes(1);
    });

    it("should return the created todo", async () => {
      // Arrange: กำหนดค่าจำลองสำหรับการคืนค่า
      const mockTodo = { id: 1, title: "New Todo" };
      todoModel.create.mockResolvedValue(mockTodo);

      // Act: เรียกใช้ฟังก์ชัน create และรับค่าผลลัพธ์
      const todo = await todoService.create({ title: "New Todo" });

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับค่าจำลองที่ตั้งไว้
      expect(todo).toEqual(mockTodo);
    });
  });

  // การทดสอบฟังก์ชัน 'update'
  describe("update", () => {
    it("should call todoModel.update with correct id and data", async () => {
      // Arrange: กำหนดค่า id และข้อมูลที่จะใช้ในการทดสอบ
      const id = 1;
      const data = { title: "Updated Todo" };

      // Act: เรียกใช้ฟังก์ชัน update ของ todoService ด้วย id และข้อมูล
      await todoService.update(id, data);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน update ของ todoModel ด้วย id และข้อมูลที่ถูกต้อง 1 ครั้ง
      expect(todoModel.update).toHaveBeenCalledWith(id, data);
      expect(todoModel.update).toHaveBeenCalledTimes(1);
    });

    it("should return the updated todo", async () => {
      // Arrange: กำหนดค่าจำลองสำหรับการคืนค่า
      const mockTodo = { id: 1, title: "Updated Todo" };
      todoModel.update.mockResolvedValue(mockTodo);

      // Act: เรียกใช้ฟังก์ชัน update และรับค่าผลลัพธ์
      const todo = await todoService.update(1, { title: "Updated Todo" });

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับค่าจำลองที่ตั้งไว้
      expect(todo).toEqual(mockTodo);
    });
  });

  // การทดสอบฟังก์ชัน 'delete'
  describe("delete", () => {
    it("should call todoModel.delete with correct id", async () => {
      // Arrange: กำหนดค่า id ที่จะใช้ในการทดสอบ
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน delete ของ todoService ด้วย id
      await todoService.delete(id);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ฟังก์ชัน delete ของ todoModel ด้วย id ที่ถูกต้อง 1 ครั้ง
      expect(todoModel.delete).toHaveBeenCalledWith(id);
      expect(todoModel.delete).toHaveBeenCalledTimes(1);
    });

    it("should return the deleted todo", async () => {
      // Arrange: กำหนดค่าจำลองสำหรับการคืนค่า
      const mockTodo = { id: 1, title: "Deleted Todo" };
      todoModel.delete.mockResolvedValue(mockTodo);

      // Act: เรียกใช้ฟังก์ชัน delete และรับค่าผลลัพธ์
      const todo = await todoService.delete(1);

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับค่าจำลองที่ตั้งไว้
      expect(todo).toEqual(mockTodo);
    });
  });
});