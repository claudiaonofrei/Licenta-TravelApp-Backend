import bcrypt from "bcrypt";
import { findUserByEmail } from "../../globals/findUserById.js";
import { getWebTokens } from "../../globals/generate-tokens.js";

const comparePasswords = async (receivedPassword, userPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(receivedPassword, userPassword, (err, compareResult) => {
      if (err) {
        resolve({
          isPasswordValid: false,
          status: 500,
          message: "Internal server error!",
        });
      }
      if (!compareResult) {
        resolve({
          isPasswordValid: false,
          status: 400,
          message: "Wrong credentials!",
        });
      }
      resolve({
        isPasswordValid: true,
        status: 200,
        message: "Ok!",
      });
    });
  });
};

export default async (req, res) => {
  const foundUser = await findUserByEmail(req.body.email);
  if (!foundUser) {
    res.status(400).json({ message: "Wrong credentials!" });
    return;
  }

  const comparePasswordsResult = await comparePasswords(
    req.body.password,
    foundUser.password
  );

  if (!comparePasswordsResult.isPasswordValid) {
    res
      .status(comparePasswordsResult.status)
      .json({ message: comparePasswordsResult.message });
    return;
  }

  const webTokens = getWebTokens(foundUser);
  res.json(webTokens);
};
