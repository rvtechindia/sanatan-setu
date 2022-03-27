import {
  COMPANY_REQUEST,
  COMPANY_SUCCESS,
  CLEAR_ERRORS,
  COMPANY_FAIL,
  COMPANY_DETAIL_REQUEST,
  COMPANY_DETAIL_SUCCESS,
  COMPANY_DETAIL_FAIL,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL,
  COMPANY_ME_REQUEST,
  COMPANY_ME_SUCCESS,
  COMPANY_ME_FAIL,
} from "../constants/companyConstants";
import axios from "axios";

const url = "http://52.66.174.13:3001/api/v1/employer";

// category
export const getCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${url}/get/all/company`, config);

    dispatch({ type: COMPANY_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({ type: COMPANY_FAIL, payload: error.response.data.message });
  }
};

export const getcompanyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_DETAIL_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${url}/get/company?id=${id}`, config);

    console.log(data);

    dispatch({ type: COMPANY_DETAIL_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({
      type: COMPANY_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// favourite

export const getFavourite = () => async (dispatch) => {};

// add company

export const newCompany = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${url}/add/company`,
      companyData,
      config
    );

    dispatch({ type: ADD_COMPANY_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({ type: ADD_COMPANY_FAIL, payload: error.response.data.message });
  }
};

// me

export const getMyCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_ME_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${url}/company/me`, config);

    dispatch({ type: COMPANY_ME_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({ type: COMPANY_ME_FAIL, payload: error.response.data.message });
  }
};