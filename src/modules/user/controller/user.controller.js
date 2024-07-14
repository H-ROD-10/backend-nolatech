import { userServices } from "../services/user.services.js";

export const userController = {
  signup: async (req, res, next) => {
    const { username, email, password, role } = req.body;
    return await userServices.signup(res, username, email, password, role);
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    return await userServices.login(res, email, password);
  },

  list: async (req, res, next) => {
    const { page, limit } = req.query;
    return await userServices.list(res, page, limit);
  },

  getMyProfile: async (req, res, next) => {
    return await userServices.getMyProfile(res, req.user.id);
  },

  updateRoleUser: async (req, res, next) => {
    const { _id, role } = req.body;
    return await userServices.updateRoleUser(res, _id, role);
  },

  updateMyUser: async (req, res, next) => {
    const { username, email, password } = req.body;
    return await userServices.updateUser(
      res,
      req.user.id,
      username,
      email,
      password
    );
  },

  delete: async (req, res, next) => {
    const { _id } = req.params;
    return await userServices.deleteUser(res, _id);
  },
  logout: async (req, res, next) => {
    return await userServices.logout(res);
  },
};
