const todoService = require("../services/todo.service");
const createError = require("../utils/createError");

const todoController = {}

todoController.getAll = async (req, res, next) => {
  try {
    const todos = await todoService.getAll();
  res.json(todos);
  } catch (error) {
    next(error)
  }
}


todoController.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await todoService.getById(+id);
    if (!todo) {
      return next()
    }
  res.json(todo);
  } catch (error) {
    next(error)
  }
}


todoController.create = async (req, res, next) => {
  try {

    const {title} = req.body

    if (!title) {
      createError(400, "Title is required")
    }
    const todo = await todoService.create({title});

  res.status(201).json(todo);
  } catch (error) {
    next(error)
  }
}

todoController.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isHaveTodo = await todoService.getById(+id);
    if (!isHaveTodo) {
      return next()
    }
    const todo = await todoService.update(+id, req.body);
    if (!todo) {
      next()
    }
  res.json(todo);
  } catch (error) {
    next(error)
  }
}

todoController.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const isHaveTodo = await todoService.getById(+id);
    if (!isHaveTodo) {
      return next()
    }
    const todo = await todoService.delete(+id);
  res.json(todo);
  } catch (error) {
    next(error)
  }
}

module.exports = todoController


