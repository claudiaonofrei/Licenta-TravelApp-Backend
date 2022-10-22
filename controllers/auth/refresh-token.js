import jwt from "jsonwebtoken";
import { getWebTokens } from "../../globals/generate-tokens.js";

export default (req, res) => {
  const refreshToken = req.headers.refreshtoken;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized!" });
    return;
  }

  try {
    const verified = jwt.verify(refreshToken, process.env.WEB_TOKEN_SECRET);
    const newTokens = getWebTokens(verified);
    res.json(newTokens);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized!" });
    return;
  }
};
