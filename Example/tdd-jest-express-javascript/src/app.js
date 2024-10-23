const express = require("express");
const todoRouter = require("./routes/todo.routes");
const ErrorMiddleware = require("./middlewares/errorHandler.middleware");
const notFound = require("./middlewares/notFound.middleware");
const app = express();

app.use(express.json());

app.use("/todo", todoRouter);

app.use(notFound);
app.use(ErrorMiddleware);

module.exports = app;
