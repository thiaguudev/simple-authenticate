"use strict";

const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const authorization = req.headers && req.headers.authorization;

  try {
    if (!authorization || !/^Bearer/.test(authorization)) {
      throw new Error("Need to inform the token");
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.decode(token, process.env.SECRET_KEY);

    if (!decoded) {
      throw new Error("Not Authorized");
    }

    req.username = decoded.username;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = authenticate;
