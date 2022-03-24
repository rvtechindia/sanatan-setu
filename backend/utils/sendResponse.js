// send response

const sendResponse = (res, statusCode, payload) => {
  res.status(statusCode).json({
    success: true,
    payload,
  });
};

module.exports = sendResponse;
