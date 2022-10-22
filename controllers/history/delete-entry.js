import History from "../../models/history-model.js";

export default (req, res) => {
  History.deleteOne(
    { _id: req.params.id, userId: req.authorizedUser._id },
    (err) => {
      if (err) {
        res.status(400).json({ message: `Couldn't delete!` });
        return;
      }
      res.json({ ok: true });
    }
  );
};
