// Arrange: เตรียมข้อมูลสำหรับทดสอบ
const {
  checkAllFieldTodo,
  createTodo,
  upDateTodo,
  deleteTitleTodo,
} = require("./index");

describe("All todo function test", () => {

  let todo 

  
  beforeEach(() => {
    // This code will run before each test
    todo = {
      title: "title",
      description: "description",
      isCompleted: false,
    };
  });

  test("createTodo", () => {
    // Arrange
    const title = "title";
    const description = "description";
    const expectedTodo = {
      title: "title",
      description: "description",
      isCompleted: false,
    };

    // Act
    const todo = createTodo(title, description);

    // Assert
    expect(todo).toEqual(expectedTodo);
  });

  test("upDateTodo", () => {
    // Arrange
    const newTitle = "newTitle";
    const newDescription = "newDescription";
    const expectedTodo = {
      title: newTitle,
      description: newDescription,
      isCompleted: false,
    };

    // Act
    upDateTodo(todo, newTitle, newDescription);

    // Assert
    expect(todo).toEqual(expectedTodo);
  });

  test("deleteTitleTodo", () => {
    // Arrange
    const expectedTodo = {
      description: "description",
      isCompleted: false,
    };

    // Act
    deleteTitleTodo(todo);

    // Assert
    expect(todo).toEqual(expectedTodo);
  });

  test("checkAllFieldTodo", () => {
    // Act
    const result = checkAllFieldTodo(todo);

    // Assert
    expect(result).toBe(true);
  });
});