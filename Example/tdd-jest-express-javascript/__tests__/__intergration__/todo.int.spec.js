const request = require("supertest");
const app = require("../../src/app"); // Import your Express app

describe("Todo Integration Tests", () => {
  
  // Test POST /todo (create a new todo)
  describe("POST /todo", () => {

    it("should create a new todo and return 201", async () => {
      // Arrange
      const newTodo = { title: "Test Todo" };
      
      // Act
      const response = await request(app).post("/todo").send(newTodo);
      
      // Assert
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe("Test Todo");
    });

    it("should return 400 for invalid data", async () => {
      // Arrange
      const invalidTodo = {};
      
      // Act
      const response = await request(app).post("/todo").send(invalidTodo);
      
      // Assert
      expect(response.statusCode).toBe(400);
    });
  });

  // Test GET /todo (get all todos)
  describe("GET /todo", () => {
    it("should return all todos with a 200 status code", async () => {
      // Act
      const response = await request(app).get("/todo");
      
      // Assert
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // Test GET /todo/:id (get todo by id)
  describe("GET /todo/:id", () => {
    it("should return a specific todo by id", async () => {
      // Arrange
      const todos = await request(app).get("/todo");
      const todoId = todos.body[0]?.id || 1;
      
      // Act
      const response = await request(app).get(`/todo/${todoId}`);
      
      // Assert
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("id", todoId);
    });

    it("should return 404 for a non-existent todo", async () => {
      // Arrange
      const invalidId = 999;
      
      // Act
      const response = await request(app).get(`/todo/${invalidId}`);
      
      // Assert
      expect(response.statusCode).toBe(404);
    });
  });

  // Test PUT /todo/:id (update a todo)
  describe("PUT /todo/:id", () => {
    it("should update an existing todo and return 200", async () => {
      // Arrange
      const updatedTodo = { title: "Updated Todo" };
      const todos = await request(app).get("/todo");
      const todoId = todos.body[0]?.id || 1;
      
      // Act
      const response = await request(app).put(`/todo/${todoId}`).send(updatedTodo);
      
      // Assert
      expect(response.statusCode).toBe(200);
      expect(response.body.title).toBe("Updated Todo");
    });

    it("should return 404 for non-existent todo", async () => {
      // Arrange
      const updatedTodo = { title: "Updated Todo" };
      const invalidId = 999;
      
      // Act
      const response = await request(app).put(`/todo/${invalidId}`).send(updatedTodo);
      
      // Assert
      expect(response.statusCode).toBe(404);
    });
  });

  // Test DELETE /todo/:id (delete a todo)
  describe("DELETE /todo/:id", () => {
    it("should delete a todo and return 200", async () => {
      // Arrange
      const todos = await request(app).get("/todo");
      const todoId = todos.body[0]?.id || 1; // Use a valid ID or fallback to 1
      
      // Act
      const response = await request(app).delete(`/todo/${todoId}`);
      
      // Assert
      expect(response.statusCode).toBe(200);
    });

    it("should return 404 for non-existent todo", async () => {
      // Arrange
      const invalidId = 999;
      
      // Act
      const response = await request(app).delete(`/todo/${invalidId}`);
      
      // Assert
      expect(response.statusCode).toBe(404);
    });
  });
});