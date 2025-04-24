import * as UserModel from "../models/userModel";
import { UserType } from "../types/userTypes";

export const createUser = async (UserData: UserType) => {
  return await UserModel.createUser(UserData);
};

export const getUser = async () => {
  return await UserModel.getUsers();
};

export const getUserById = async (id: number) => {
  return await UserModel.getUserById(id);
};

export const removeUser = async (id: number) => {
  return await UserModel.removeUser(id);
};

export const updateUser = async (id: number, UserData: UserType) => {
  return await UserModel.updateUser(id, UserData);
};
