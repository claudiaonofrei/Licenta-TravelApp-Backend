import Users from "../models/user-model.js";

export const findUserByEmail = async (email) => {
  return Users.find({ email })
    .exec()
    .then((response) => {
      return response[0];
    })
    .catch((err) => {
      return err;
    });
};
