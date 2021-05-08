const router = require("express").Router();
let Gameplay = require("../models/gameplay.model");

router.route("/").get((req, res) => {
  Gameplay.find()
    .then((gameplay) => res.json(gameplay))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const arr = req.body.arr;
  const play = req.body.play;
  const result = req.body.result;
  Gameplay.find({
    "arr.0.data": arr[0].data,
    "arr.1.data": arr[1].data,
    "arr.2.data": arr[2].data,
    "arr.3.data": arr[3].data,
    "arr.4.data": arr[4].data,
    "arr.5.data": arr[5].data,
    "arr.6.data": arr[6].data,
    "arr.7.data": arr[7].data,
    "arr.8.data": arr[8].data,
    "arr.0.turn": arr[0].turn,
    "arr.1.turn": arr[1].turn,
    "arr.2.turn": arr[2].turn,
    "arr.3.turn": arr[3].turn,
    "arr.4.turn": arr[4].turn,
    "arr.5.turn": arr[5].turn,
    "arr.6.turn": arr[6].turn,
    "arr.7.turn": arr[7].turn,
    "arr.8.turn": arr[8].turn,
    play: play,
    result: result,
  }).then((gameplay) => {
    if (gameplay[0]) res.json("exist");
    else {
      const newGameplay = new Gameplay({
        arr,
        play,
        result,
      });
      newGameplay
        .save()
        .then(() => res.json("added"))
        .catch((err) => res.status(400).json("Error1: " + err));
    }
  });
});
function check(arr) {
  return arr.turn === 1;
}
router.route("/next").get((req, res) => {
  const arr = req.body.arr;
  const play = req.body.play;
  if (play === "1") {
    arr.find(check).then((gameplay) => {
      res.json(gameplay);
    });
  } else res.json("yolo");

  // Gameplay.findOne({ "arr.0.data": arr[0].data, "arr.0.play": arr[0].play })
  //   .then((gameplays) => {
  //   })
  //   .catch((err) => res.json({ res: "wrong" }));
});

router.route("/").delete((req, res) => {
  Gameplay.deleteMany()
    .then(() => res.json("gameplays deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
