const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/Route.js");

const app = express();

const dbUri =
"mongodb+srv://wwewewe:12122006RoDiiioN@luckyroshan.8owid39.mongodb.net/luckyroshan?retryWrites=true&w=majority";

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("DB has been connected...");
  })
  .catch((err) => {
    console.log(`DB hasn't been connected, error: ${err}`);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);


const port = 8081;

app.listen(port, () => {
  console.log("Server is on port " + port);
});

