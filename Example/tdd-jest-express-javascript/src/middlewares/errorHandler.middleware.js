const ErrorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(err.statusCode || 500).json({ error: err.message });
};
module.exports = ErrorMiddleware;