const successResponse = (res, message, data = {}) => {
  return res.status(200).json({
    success: true,
    message,
    data
  });
};

const errorResponse = (res, status, message) => {
  return res.status(status).json({
    success: false,
    message
  });
};

module.exports = {
  successResponse,
  errorResponse
};