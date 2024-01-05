import Chat from "./chat";
import Message from "./message";
import User from "./user";

User.hasMany(Chat, { sourceKey: "id", foreignKey: "userId", as: "chats" });

Chat.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Chat.hasMany(Message, {
  sourceKey: "id",
  foreignKey: "chatId",
  as: "messages",
});

Message.belongsTo(Chat, {
  foreignKey: "chatId",
  as: "chats",
});

export { User, Chat, Message };
