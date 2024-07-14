import jwt from "jsonwebtoken";
import { userServices } from "../services/user.services.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

//Checks if user is authenticated or not
export const isAuthenticated = async (req, res, next) => {
  const token = await req.headers.authorization?.split(" ")[1];

  if (!token || token === undefined) {
    next(new ErrorHandler("debes autenticarte para acceder a este recurso"));
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const { user } = await userServices.findById(decode.id);

    req.user = user;

    if (!user) {
      next(new ErrorHandler("Token no valido"));
    }

    next();
  } catch (error) {
    res.status(401).json({
      status: 401,
      success: false,
      message: error.message,
    });
  }
};

// Role & authorization
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler("role"));
    }

    next();
  };
};
