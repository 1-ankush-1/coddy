import sequelize from "../config/db_connect";
import Sequelize from "sequelize";
import { types } from "util";
import MessageInstance from "../types/models/message";

const Message = sequelize.define<MessageInstance>("message", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: false,
    primaryKey: true,
    unique: true,
  },
  role: {
    type: Sequelize.STRING,
  },
  parts: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  chatId: {
    type: Sequelize.UUID,
  },
});

export default Message;
