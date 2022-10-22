import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import routes from "./routes/app-routes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

const databaseConnectionUri = `mongodb+srv://${process.env.MONGODB_USER_USERNAME}:${process.env.MONGODB_USER_PASSWORD}@cluster0.n0gs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(databaseConnectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB!"));

app.listen(PORT, () => {
  routes(app);
  console.log(`the server is running at ${PORT}!`);
});
