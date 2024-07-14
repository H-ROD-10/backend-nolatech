import { ErrorHandler } from "../utils/errorHandler.js";

const errors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  // Handling Unauthorized Access Error
  if (err.message === "role") {
    const message = "No tienes permisos para acceder a este recurso";
    error = new ErrorHandler(message, 403); // 403 is the status code for Forbidden
  }

  // Wrong Mongoose Object ID Error
  if (error.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose duplicate errors
  if (err.code === 11000) {
    const message = `El ${Object.keys(
      err.keyValue
    )} ingresado ya esta registrado en nuestro sistema, porfavor verifique`;
    error = new ErrorHandler(message, 400);
  }

  // Handling Error JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = "Json Web Token es invalido. Intenta de nuevo";
    error = new ErrorHandler(message, 400);
  }
  // Handling Expired JWT
  if (err.name === "TokenExpiredError") {
    const message = "Json Web Token es expiró. Intenta de nuevo";
    error = new ErrorHandler(message, 400);
  }

  // Handling Unauthorized Access Error
  if (err.message === "role") {
    const message = "No tienes permisos para acceder a este recurso";
    error = new ErrorHandler(message, 403); // 403 is the status code for Forbidden
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Error interno del servidor",
  });
};

export default errors;
