import History from "../../models/history-model.js";

export default async (req, res) => {
  History.find(
    {
      userId: req.authorizedUser._id,
    },
    (err, docs) => {
      if (err) {
        res.status(500).json({
          message: "Internal server error!",
        });
        return;
      }

      res.json(docs);
    }
  );
};
