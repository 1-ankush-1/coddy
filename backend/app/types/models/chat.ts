import { Model, Optional } from "sequelize";
import { message } from "../gemini/message";

interface ChatAttributes {
  id: string;
  name: string;
  message: Array<message>;
  userId: string;
}

//below are optional
interface ChatCreationAttributes extends Optional<ChatAttributes, "id"> {}

interface ChatInstance
  extends Model<ChatAttributes, ChatCreationAttributes>,
    ChatAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export default ChatInstance;
