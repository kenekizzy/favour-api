const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const server = require("http").createServer(app);
require("dotenv").config();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db conncted");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server running...");
});
