const express = require("express");
const router = new express.Router();
const Model = require("../models/Blog");
const cors = require("cors");
router.use(express.json());

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.post("/create", async (req, res) => {
  try {
    const { title, description, category, status } = req.body;
    console.log(req.body);
    //   console.log(email, password);
    //   const hash = await bcrypt.hash(password, 10);
    //   console.log(hash);
    //   const res = await User.create({ email, password: hash });
    //   res.json({ success: true });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;

