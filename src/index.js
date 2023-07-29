"use strict";

require("dotenv").config();
const server = require("./server");

const serverPort = process.env.SERVER_PORT || 8080;

server.listen(serverPort);

server.on("listening", () => console.log(`Server running on *:${serverPort}`));
