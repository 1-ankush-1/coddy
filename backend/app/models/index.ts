import Chat from "./chat";
import User from "./user";

User.hasMany(Chat, { sourceKey: "id", foreignKey: "userId", as: "chats" });

Chat.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export { User, Chat };
