import createEntry from "../controllers/history/create-entry.js";
import retrieveEntries from "../controllers/history/retrieve-entries.js";
import deleteEntry from "../controllers/history/delete-entry.js";
import updateCities from "../controllers/history/update-cities.js";
import { verifyAuthTokenMiddleware } from "../globals/verify-auth-token.js";

export default (app) => {
  app.route("/history").post(verifyAuthTokenMiddleware, createEntry);
  app.route("/history").get(verifyAuthTokenMiddleware, retrieveEntries);
  app.route("/history/:id").delete(verifyAuthTokenMiddleware, deleteEntry);
  app.route("/history/:id").put(verifyAuthTokenMiddleware, updateCities);
};
