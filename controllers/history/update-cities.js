import History from "../../models/history-model.js";

export default async (req, res) => {
  try {
    if (!req.body.cities) {
      res.status(400).json({ message: "Cities are missing!" });
      return;
    }

    const doc = await History.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.authorizedUser._id,
      },
      { cities: req.body.cities }
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};
