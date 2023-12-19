import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "something went wrong, try again later";
  const errorResponse = {
    error: {
      name: err.name || "UnknownError",
      message: msg,
    },
  };
  res.status(statusCode).json(errorResponse);
};

export default errorHandlerMiddleware;
