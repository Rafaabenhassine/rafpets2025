import {
  ADD_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  AVAILABLE_PRODUCT,
  MIN,
  PLUS,
  LOAD_USER,
  REGISTER_USER,
  FAIL_USER,
  LOGIN_USER,
  LOG_OUT,
} from "../ActionTypes/ActionsTypes";
import axios from "axios";
export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const availableProduct = (id) => {
  return {
    type: AVAILABLE_PRODUCT,
    payload: id,
  };
};

export const plus = (id) => {
  return {
    type: PLUS,
    payload: id,
  };
};

export const min = (id) => {
  return {
    type: MIN,
    payload: id,
  };
};

export const addCart = (id) => {
  return {
    type: ADD_CART,
    payload: id,
  };
};

//REGISTER new user
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER }); // appel load
  try {
    let result = await axios.post("/api/user/register", newUser); //axios appel api  result => token ,data , newUser
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//login
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER }); // appel load
  try {
    let result = await axios.post("/api/user/login", user); //axios appel api  result => token ,data , newUser
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
  }
};

//logOut => efface user du reducer pas du back-end
export const logOut = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
};
