const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/", routes);

mongoose.connect(process.env.MONGO_URI).then((res) => {
  app.listen(process.env.PORT, () => {
    console.log("connected DB && listening on 4000");
  });
});
