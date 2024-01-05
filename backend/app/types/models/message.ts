import { Model, Optional } from "sequelize";

interface MessageAttributes {
  id: string;
  role: string;
  parts: Array<Text>;
  chatId: string;
}

//below are optional
interface MessageCreationAttributes extends Optional<MessageAttributes, "id"> {}

interface MessageInstance
  extends Model<MessageAttributes, MessageCreationAttributes>,
    MessageAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

export default MessageInstance;
