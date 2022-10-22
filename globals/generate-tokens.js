import jwt from "jsonwebtoken";
import moment from "moment";

const generateWebToken = (
  { _id, email, firstName, lastName, password },
  expirationTime
) => {
  return jwt.sign(
    { _id, email, firstName, lastName, password },
    process.env.WEB_TOKEN_SECRET,
    {
      expiresIn: expirationTime,
    }
  );
};

export const getWebTokens = (userData) => {
  return {
    authToken: generateWebToken(userData, "3600s"),
    refreshToken: generateWebToken(userData, "604800s"),
    expiresIn: moment().add(1, "h").unix(),
  };
};
