import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/index";
import sequelize from "./config/db_connect";

const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(bodyParser.json());

/**
 * Routes
 */
app.use(Routes);

/**
 * Connect to db then Listen
 */
sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is listening on ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log(`${err} occured whne syncing with sequalize`);
  });
