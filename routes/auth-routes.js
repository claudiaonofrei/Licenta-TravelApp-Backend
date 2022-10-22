import login from "../controllers/auth/login.js";
import signup from "../controllers/auth/signup.js";
import { verifyAuthTokenMiddleware } from "../globals/verify-auth-token.js";
import refreshToken from "../controllers/auth/refresh-token.js";

export default (app) => {
  app.route("/auth/login").post(login);
  app.route("/auth/signup").post(signup);
  app.route("/auth/refresh-token").get(verifyAuthTokenMiddleware, refreshToken);
};
