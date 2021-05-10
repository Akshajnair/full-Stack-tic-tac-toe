const router = require("express").Router();
let Gameplay = require("../models/gameplay.model");

router.route("/").get((req, res) => {
  Gameplay.find()
    .then((gameplay) => res.json(gameplay))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/last").get((req, res) => {
  Gameplay.find()
    .then((gameplay) => {
      let obj={}
      obj.len=gameplay.length
      obj.lastarr=gameplay[obj.len-1].arr
      res.json(obj)
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const arr = req.body.arr;
  const play = req.body.play;
  const result = req.body.result;
  Gameplay.find({
    "arr.0.place": arr[0].place,
    "arr.1.place": arr[1].place,
    "arr.2.place": arr[2].place,
    "arr.3.place": arr[3].place,
    "arr.4.place": arr[4].place,
    "arr.5.place": arr[5].place,
    "arr.6.place": arr[6].place,
    "arr.7.place": arr[7].place,
    "arr.8.place": arr[8].place,
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

router.route("/next").post((req, res) => {
  const arr = req.body.arr;
  const play = req.body.play;
  if (play === 1) {
    Gameplay.findOne({
      "arr.0.place": arr[0].place,
      result: 2 || 0,
    }).then((gameplay) => {
      if (gameplay) res.json(gameplay.arr[1].place);
      else res.json("no play");
    });
  } else if (play === 3) {
    Gameplay.findOne({
      "arr.0.place": arr[0].place,
      "arr.2.place": arr[2].place,
      result: 2 || 0,
    }).then((gameplay) => {
      if (gameplay) res.json(gameplay.arr[3].place);
      else res.json("no play");
    });
  } else if (play === 5) {
    Gameplay.findOne({
      "arr.0.place": arr[0].place,
      "arr.2.place": arr[2].place,
      "arr.4.place": arr[4].place,
      result: 2 || 0,
    }).then((gameplay) => {
      if (gameplay) res.json(gameplay.arr[5].place);
      else res.json("no play");
    });
  } else if (play === 7) {
    Gameplay.findOne({
      "arr.0.place": arr[0].place,
      "arr.2.place": arr[2].place,
      "arr.4.place": arr[4].place,
      "arr.6.place": arr[6].place,
      result: 2 || 0,
    }).then((gameplay) => {
      if (gameplay) res.json(gameplay.arr[7].place);
      else res.json("no play");
    });
  }
});

router.route("/").delete((req, res) => {
  Gameplay.deleteMany()
    .then(() => res.json("gameplays deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
