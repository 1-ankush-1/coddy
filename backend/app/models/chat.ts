import sequelize from "../config/db_connect";
import Sequelize from "sequelize";
import ChatInstance from "../types/models/chat";

const Chat = sequelize.define<ChatInstance>("chat", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.TEXT),
    allowNull: false,
  },
  userId: {
    type: Sequelize.UUID,
  },
});

export default Chat;
