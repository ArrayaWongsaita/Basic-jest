// นำเข้า Prisma instance ที่ถูกตั้งค่า mock และโมเดลของ todo
const prisma = require("../../src/config/prisma");
const todoModel = require("../../src/models/todo.model");

// Mock เมธอดต่าง ๆ ของ prisma.todo เพื่อตั้งค่าผลลัพธ์ในแต่ละการทดสอบ
jest.mock("../../src/config/prisma", () => ({
  todo: {
    create: jest.fn(),
    update: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    delete: jest.fn(),
  },
}));

// ประกาศตัวแปรที่ใช้เก็บข้อมูลจำลอง (mock data) และ id
let data;
let id;

// เตรียมข้อมูลจำลองก่อนการทดสอบแต่ละชุด
beforeEach(() => {
  data = { title: "helloWorld" }; // ข้อมูลจำลองของ todo
  id = 1; // กำหนดค่า id สำหรับการทดสอบ
});

// กลุ่มการทดสอบสำหรับโมเดลของ todo
describe("todoModel", () => {
  
  // การทดสอบฟังก์ชัน delete
  describe("delete", () => {
    it("should be a function", () => {
      // Assert: ตรวจสอบว่าฟังก์ชัน delete เป็นฟังก์ชันจริง ๆ หรือไม่
      expect(todoModel.delete).toBeInstanceOf(Function);
    });

    it("should call prisma.todo.delete 1 time", async () => {
      // Arrange: กำหนดค่า id ที่ต้องการใช้
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน delete
      await todoModel.delete(id);

      // Assert: ตรวจสอบว่าฟังก์ชัน prisma.todo.delete ถูกเรียก 1 ครั้ง
      expect(prisma.todo.delete).toHaveBeenCalledTimes(1);
    });

    it("should call prisma.todo.delete with the correct id", async () => {
      // Arrange: กำหนดค่า id ที่ต้องการใช้
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน delete ด้วย id ที่กำหนด
      await todoModel.delete(id);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ prisma.todo.delete ด้วย id ที่ถูกต้อง
      expect(prisma.todo.delete).toHaveBeenCalledWith({ where: { id } });
    });

    it("should return the deleted todo", async () => {
      // Arrange: ตั้งค่าผลลัพธ์จำลองของ prisma.todo.delete
      prisma.todo.delete.mockResolvedValue(data);

      // Act: เรียกใช้ฟังก์ชัน delete และรับค่าผลลัพธ์
      const result = await todoModel.delete(id);

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับข้อมูลที่จำลองไว้
      expect(result).toEqual(data);
    });
  });

  // การทดสอบฟังก์ชัน getById
  describe("getById", () => {
    it("should be a function", () => {
      // Assert: ตรวจสอบว่าฟังก์ชัน getById เป็นฟังก์ชันจริง ๆ หรือไม่
      expect(todoModel.getById).toBeInstanceOf(Function);
    });

    it("should call prisma.todo.findUnique 1 time", async () => {
      // Arrange: กำหนดค่า id ที่ต้องการใช้
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน getById
      await todoModel.getById(id);

      // Assert: ตรวจสอบว่าฟังก์ชัน prisma.todo.findUnique ถูกเรียก 1 ครั้ง
      expect(prisma.todo.findUnique).toHaveBeenCalledTimes(1);
    });

    it("should call prisma.todo.findUnique with the correct id", async () => {
      // Arrange: กำหนดค่า id ที่ต้องการใช้
      const id = 1;

      // Act: เรียกใช้ฟังก์ชัน getById ด้วย id ที่กำหนด
      await todoModel.getById(id);

      // Assert: ตรวจสอบว่าถูกเรียกใช้ prisma.todo.findUnique ด้วย id ที่ถูกต้อง
      expect(prisma.todo.findUnique).toHaveBeenCalledWith({ where: { id } });
    });

    it("should return the found todo", async () => {
      // Arrange: ตั้งค่าผลลัพธ์จำลองของ prisma.todo.findUnique
      prisma.todo.findUnique.mockResolvedValue(data);

      // Act: เรียกใช้ฟังก์ชัน getById และรับค่าผลลัพธ์
      const result = await todoModel.getById(id);

      // Assert: ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับข้อมูลที่จำลองไว้
      expect(result).toEqual(data);
    });
  });

  // ส่วนอื่น ๆ (create, update, getAll) สามารถใช้หลักการเดียวกันนี้ในการทดสอบ
});