import { Model, Optional } from "sequelize";
import { message } from "../gemini/message";

interface ChatAttributes {
  id: string;
  name: string;
  userId: string;
  isdeleted?: Boolean;
}

//below are optional
interface ChatCreationAttributes extends Optional<ChatAttributes, "id"> {
  isdeleted?: Boolean;
}

interface ChatInstance
  extends Model<ChatAttributes, ChatCreationAttributes>,
    ChatAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export default ChatInstance;
