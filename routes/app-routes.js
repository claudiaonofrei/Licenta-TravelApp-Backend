import authRoutes from "./auth-routes.js";
import historyRoutes from "./history-routes.js";

export default (app) => {
  authRoutes(app);
  historyRoutes(app);
};
