const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwtsecret = "hellothisisfordemopurpose";
const bcrypt = require("bcrypt");
router.use(express.json());
const bodyParser = require("body-parser");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    const res = await User.create({ email, password: hash });
    res.json({ success: true });
  } catch (error) {
    res.status(404).send(error);
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    const token = jwt.sign({ id: user._id }, jwtsecret);
    console.log(token);
    res.json({ success: true, token });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
