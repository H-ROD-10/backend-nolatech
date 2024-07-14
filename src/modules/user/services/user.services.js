import { ErrorHandler } from "../../../utils/errorHandler.js";
import { sendToken } from "../../../utils/sendToken.js";
import { userRepository } from "../repository/user.repository.js";
import bcrypt from "bcrypt";

export const userServices = {
  signup: async (res, username, email, password, role) => {
    try {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newUser = {
        username,
        email,
        password: passwordHash,
        role,
      };

      const { user } = await userRepository.signup(newUser);

      if (!user) {
        return new ErrorHandler("Credenciales incorrectas", 400);
      }

      res.status(201).json({
        success: true,
        message: "Usuario creado correctamente",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  login: async (res, email, password) => {
    try {
      const { user } = await userRepository.findByEmail(email);

      const verifyPassword = await bcrypt.compare(password, user.password);

      if (!verifyPassword || !user) {
        return new ErrorHandler("Credenciales incorrectas", 401);
      }

      sendToken(user, 200, res);
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  },

  list: async (res, page, limit) => {
    try {
      const users = await userRepository.list(page, limit);
      res.status(200).json({
        success: true,
        message: "operacion exitosa",
        data: users,
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  },

  findById: async (id) => {
    try {
      const { user } = await userRepository.findById(id);

      if (!user) {
        return new ErrorHandler("Credenciales incorrectas", 400);
      }
      return {
        user,
      };
    } catch (error) {
      return new ErrorHandler(error.message, 400);
    }
  },

  getMyProfile: async (res, id) => {
    try {
      const { user } = await userRepository.findById(id);
      res.status(200).json({
        success: true,
        message: "operacion exitosa",
        data: user,
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  },

  updateRoleUser: async (res, _id, role) => {
    try {
      const user = await userRepository.updateRoleUser(_id, role);
      res.status(200).json({
        success: true,
        message: "Rol actualizado correctamente",
        data: user,
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
        data: null,
      });
    }
  },

  deleteUser: async (res, _id) => {
    try {
      const { deleteUser } = await userRepository.deleteUser(_id);

      if (!deleteUser) {
        throw new ErrorHandler("Credenciales incorrectas", 400);
      }
      res.status(200).json({
        success: true,
        message: "Usuario eliminado correctamente",
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  },
  logout: async (res) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(200).json({
        success: true,
        message: "Cierre de sesión exitoso",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
