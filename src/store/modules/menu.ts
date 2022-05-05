import menuApi from "@/api/menu";
import { AxiosError, AxiosResponse } from "axios";

export interface IMenuState {
  language: string;
  currentUser: IUserEntity | null;
  isLoadingUser: boolean;
  userError: IErrorUser | null;
}

export interface IModuleMenuState {
  menu: IMenuState;
}

export interface IErrorUser {
  emailError: string[];
  loginError: string[];
  passwordError: string[];
}

export interface IUserEntity {
  login: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IResponseUserInfo {
  errors: IErrorUser;
  user: IUserEntity;
  message: string;
}

export interface ISingInUserData {
  login: string;
  password: string;
}

export interface ISingUpUserData extends ISingInUserData {
  mail: string;
}

export interface IResponse<T> {
  [x: string]: T;
}

export interface IContext {
  commit<T>(type: string, payload?: T): void;
}

const state: IMenuState = {
  language: "Ru",
  currentUser: null,
  isLoadingUser: false,
  userError: null,
};

export const mutationTypes = {
  getCurrentUserStart: "[menu] Get current user start",
  getCurrentUserSuccess: "[menu] Get current user success",
  getCurrentUserFailure: "[menu] Get current user failure",

  signInCurrentUserStart: "[menu] Sign in current user start",
  signInCurrentUserSuccess: "[menu] Sign in current user success",
  signInCurrentUserFailure: "[menu] Sign in current user failure",

  signUpCurrentUserStart: "[menu] Sign up current user start",
  signUpCurrentUserSuccess: "[menu] Sign up current user success",
  signUpCurrentUserFailure: "[menu] Sign up current user failure",

  changeLanguage: "[menu] Change language",
};

export const actionTypes = {
  getCurrentUser: "[menu] Get current user start",
  signInCurrentUser: "[menu] Sign in current user",
  signUpCurrentUser: "[menu] Sign up current use",
  changeLanguage: "[menu] Change language",
};

const mutations = {
  [mutationTypes.getCurrentUserStart](state: IMenuState) {
    state.isLoadingUser = true;
    state.currentUser = null;
    state.userError = null;
  },

  [mutationTypes.getCurrentUserSuccess](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = payload?.data?.user;
    state.userError = null;
  },

  [mutationTypes.getCurrentUserFailure](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = null;
    state.userError = payload?.data?.errors;
  },

  [mutationTypes.signInCurrentUserStart](state: IMenuState) {
    state.isLoadingUser = true;
    state.currentUser = null;
    state.userError = null;
  },

  [mutationTypes.signInCurrentUserSuccess](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = payload?.data?.user;
    state.userError = null;
  },

  [mutationTypes.signInCurrentUserFailure](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = null;
    state.userError = payload?.data?.errors;
  },

  [mutationTypes.signUpCurrentUserStart](state: IMenuState) {
    state.isLoadingUser = true;
    state.currentUser = null;
    state.userError = null;
  },

  [mutationTypes.signUpCurrentUserSuccess](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = payload?.data?.user;
    state.userError = null;
  },

  [mutationTypes.signUpCurrentUserFailure](
    state: IMenuState,
    payload: IResponse<IResponseUserInfo>
  ) {
    state.isLoadingUser = false;
    state.currentUser = null;
    state.userError = payload?.data?.errors;
  },

  [mutationTypes.changeLanguage](state: IMenuState, payload: string) {
    state.language = payload;
  },
};

const actions = {
  [actionTypes.getCurrentUser](context: IContext) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCurrentUserStart);
      menuApi
        .getCurrentUser()
        .then((user: AxiosResponse<IUserEntity>) => {
          context.commit(mutationTypes.getCurrentUserSuccess, user);
          resolve(user);
        })
        .catch((error: AxiosError<IErrorUser>) => {
          context.commit(mutationTypes.getCurrentUserFailure, error?.response);
        });
    });
  },
  [actionTypes.signInCurrentUser](context: IContext, data: ISingInUserData) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.signInCurrentUserStart);
      menuApi
        .signInCurrentUser(data)
        .then((user: AxiosResponse<IUserEntity>) => {
          context.commit(mutationTypes.signInCurrentUserSuccess, user);
          resolve(user);
        })
        .catch((error: AxiosError<IErrorUser>) => {
          context.commit(
            mutationTypes.signInCurrentUserFailure,
            error?.response
          );
        });
    });
  },
  [actionTypes.signUpCurrentUser](context: IContext, data: ISingUpUserData) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCurrentUserStart, data);
      menuApi
        .signUpCurrentUser(data)
        .then((user: AxiosResponse<IUserEntity>) => {
          context.commit(mutationTypes.getCurrentUserSuccess, user);
          resolve(user);
        })
        .catch((error: AxiosError<IErrorUser>) => {
          context.commit(mutationTypes.getCurrentUserFailure, error?.response);
        });
    });
  },

  [actionTypes.changeLanguage](context: IContext, data: string) {
    return context.commit(mutationTypes.changeLanguage, data);
  },
};

export default {
  state,
  mutations,
  actions,
};
