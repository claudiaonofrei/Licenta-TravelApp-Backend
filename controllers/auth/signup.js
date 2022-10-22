import bcrypt from "bcrypt";

import Users from "../../models/user-model.js";
import { findUserByEmail } from "../../globals/findUserById.js";

export default async (req, res) => {
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);

  const userFound = await findUserByEmail(req.body.email);

  if (userFound) {
    res.status(400).json({ message: "Email is already used!" });
    return;
  }

  const newUserInformation = {
    email: req.body.email,
    password: encryptedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    countryOfBirth: req.body.countryOfBirth,
  };

  const newUserDocument = new Users(newUserInformation);
  newUserDocument.save((err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error!",
      });
      return;
    }
    res.json({
      message: "Signup completed!",
    });
  });
};
