const todoModel = require("../models/todo.model");

const todoService = {
  getAll: async () => {
    return await todoModel.getAll();
  },
  getById: async (id) => {
    return await todoModel.getById(id);
  },
  create: async (data) => {
    return await todoModel.create(data);
  },
  update: async (id, data) => {
    return await todoModel.update(id, data);
  },
  delete: async (id) => {
    return await todoModel.delete(id);
  },
};

module.exports = todoService;