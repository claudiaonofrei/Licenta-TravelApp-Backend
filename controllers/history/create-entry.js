import History from "../../models/history-model.js";

export default (req, res) => {
  if (!req.body.countryCode || !req.body.cities) {
    res.status(400).json({ message: "Bad request!" });
    return;
  }

  if (req.body.cities.length === 0) {
    res.status(400).json({ message: "No cities were selected!" });
    return;
  }

  const { countryCode, cities } = req.body;

  const newEntry = new History({
    userId: req.authorizedUser._id,
    countryCode,
    cities,
  });

  newEntry.save((err) => {
    if (err) {
      console.log("errr", err);
      res.status(500).json({
        message: "Internal server error!",
      });
      return;
    }

    res.json({ ok: true });
  });
};
