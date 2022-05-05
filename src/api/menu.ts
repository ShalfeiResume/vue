import {
  ISingInUserData,
  ISingUpUserData,
  IUserEntity,
} from "@/store/modules/menu";
import { HTTPCLient } from "@/api/HTTPClient";
import { AxiosResponse } from "axios";

const getCurrentUser = (): Promise<AxiosResponse<IUserEntity>> =>
  HTTPCLient.get({ path: "/user" });
const signInCurrentUser = (
  data: ISingInUserData
): Promise<AxiosResponse<IUserEntity>> =>
  HTTPCLient.post({ path: "/user/auth", data });
const signUpCurrentUser = (
  data: ISingUpUserData
): Promise<AxiosResponse<IUserEntity>> =>
  HTTPCLient.put({ path: "/user/create", data });

export default {
  getCurrentUser,
  signInCurrentUser,
  signUpCurrentUser,
};
