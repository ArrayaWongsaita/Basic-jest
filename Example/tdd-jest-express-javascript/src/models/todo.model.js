const prisma = require("../config/prisma");

const todoModel = {};

todoModel.create = async (data) => {
  return await prisma.todo.create({ data });
};

todoModel.update = async (id, data) => {
  return await prisma.todo.update({ where: { id }, data });
};

todoModel.getAll = async () => {
  return await prisma.todo.findMany();
};

todoModel.getById = async (id) => {
  return await prisma.todo.findUnique({ where: { id } });
};

todoModel.delete = async (id) => {
  return await prisma.todo.delete({ where: { id } });
};

module.exports = todoModel;
