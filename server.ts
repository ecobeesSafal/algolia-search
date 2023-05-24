import express from "express";
import bodyParser from "body-parser";

import router from "./routes";
const app = express();

import { save, send } from "./config/algoliaInit";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

app.use("/", router);

// save();
send();

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
