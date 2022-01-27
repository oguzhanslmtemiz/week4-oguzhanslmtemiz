import { IUser } from "../interfaces/User";
import {User} from "../models/entity/User";

const create = async (data: IUser) => {
  return await User.create(data).save();
};

const read = async (username: string) => {
  return await User.findOne({ username });
};

const list = async () => {
  return await User.find({});
};

export { create, read, list };
