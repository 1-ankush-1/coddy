import { Model, Optional } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  phone: Number;
  password: string;
  profile: string;
  ispremiumuser: boolean;
}

//below are optional
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date; // ? means optional
  updatedAt?: Date;
}

export default UserInstance;
