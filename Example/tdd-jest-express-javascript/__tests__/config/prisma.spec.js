const { PrismaClient } = require("@prisma/client");
const prisma = require("../../src/config/prisma");

describe("Prisma Client", () => {
  
  // Test if prisma is defined
  it("should be defined", () => {
    // Arrange
    // (No specific setup is needed for this test)

    // Act
    const result = prisma;

    // Assert
    expect(result).toBeDefined();
  });

  // Test if prisma has a 'todo' property
  it("should have a 'todo' property", () => {
    // Arrange
    // (No specific setup is needed for this test)

    // Act
    const result = prisma.todo;

    // Assert
    expect(result).toBeDefined();
  });

  // Test if prisma is an instance of PrismaClient
  it("should be an instance of PrismaClient", () => {
    // Arrange
    // (No specific setup is needed for this test)

    // Act
    const result = prisma;

    // Assert
    expect(result).toBeInstanceOf(PrismaClient);
  });
});