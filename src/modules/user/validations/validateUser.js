import {
  deleteSchema,
  loginSchema,
  signupSchema,
  updateMyUserSchema,
  updateRoleSchema,
} from "./schema.js";

export const validateSignup = (req, res, next) => {
  const { error, value } = signupSchema.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message;
    res.status(400).send({ error: errorMessage });
    return;
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { error, value } = loginSchema.validate(req.body);
  console.log(error);
  if (error) {
    const errorMessage = error.details[0].message;
    res.status(400).send({ error: errorMessage });
    return;
  }
  next();
};

export const validateUpdateRoleUser = (req, res, next) => {
  const { error, value } = updateRoleSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details[0].message;
    res.status(400).send({ error: errorMessage });
    return;
  }
  next();
};

export const validateMyUserUpdate = (req, res, next) => {
  const { error, value } = updateMyUserSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details[0].message;
    res.status(400).send({ error: errorMessage });
    return;
  }
  next();
};

export const validateDeleteUser = (req, res, next) => {
  const { error, value } = deleteSchema.validate(req.params);
  if (error) {
    const errorMessage = error.details[0].message;
    res.status(400).send({ error: errorMessage });
    return;
  }
  next();
};
