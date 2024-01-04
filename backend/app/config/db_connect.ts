import { Dialect, Sequelize } from "sequelize";
import DBconfig from "../utils/db_config";

const sequelize = new Sequelize(
  DBconfig.database || "",
  DBconfig.user || "",
  DBconfig.password,
  {
    host: DBconfig.host,
    dialect: DBconfig.dialect as Dialect,
    logging: false,
  }
);

export default sequelize;
