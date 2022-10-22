import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  age: Number,
  countryOfBirth: String,
});

export default mongoose.model("Users", UserSchema);
