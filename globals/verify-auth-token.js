import jwt from "jsonwebtoken";

export const verifyAuthTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Unauthorized!" });
    return;
  }

  const authToken = token.substring(7);
  try {
    const verified = jwt.verify(authToken, process.env.WEB_TOKEN_SECRET);
    req.authorizedUser = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized!" });
    return;
  }
};
