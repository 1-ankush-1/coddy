import { Model, Optional } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: Number;
  profile?: string; //optional
  ispremiumuser?: boolean; //optional
}

//below are optional
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {
  ispremiumuser?: boolean;
  profile?: string;
  phone?: Number;
}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date; // ? means optional
  updatedAt?: Date;
}

export default UserInstance;
