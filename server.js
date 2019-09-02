const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes")

var db = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(router);
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://root:password1@ds215988.mlab.com:15988/heroku_c2q4zvs7");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
