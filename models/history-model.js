import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({ name: String });

const HistorySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  countryCode: { type: String, required: true },
  cities: [CitySchema],
});

export default mongoose.model("History", HistorySchema);
