const createError = require("../utils/createError");

const notFound = (req, res, next) => {
  try {
    createError(404, `Not Found - ${req.originalUrl}`);
  } catch (error) {
    next(error);
  }
};

module.exports = notFound;