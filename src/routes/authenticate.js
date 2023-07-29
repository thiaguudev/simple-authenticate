"use strict";

const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/sign-in", async (req, res) => {
  res.json({ message: jwt.sign(req.body, process.env.SECRET_KEY) });
});

module.exports = router;
