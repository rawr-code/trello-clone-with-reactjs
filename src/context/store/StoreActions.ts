export const GET_IMAGES_SUCCESS = "imgur/GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAIL = "imgur/GET_IMAGES_FAIL";
export const GET_IMAGES = "imgur/GET_IMAGES";
export const SET_TOKEN = "imgur/SET_TOKEN";
export const SET_SCORE = "imgur/SET_SCORE";
export const LOGOUT = "imgur/LOGOUT";

export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
  };
};
