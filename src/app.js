"use strict";

const express = require("express");
const cors = require("cors");

const authenticate = require("./middlewares/authenticate");

const authRoutes = require("./routes/authenticate");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", authenticate, async (req, res) =>
  res.json({ message: `Welcome to New World, ${req.username}` })
);
app.use("/auth", authRoutes);

module.exports = app;
