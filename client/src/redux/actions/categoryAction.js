import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CLEAR_ERRORS,
  AMENITY_REQUEST,
  AMENITY_SUCCESS,
  AMENITY_FAIL,
} from "../constants/categoryConstants";
import axios from "axios";

const url = "http://52.66.174.13:3001/api/v1";

// category
export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${url}/get/all/category`, config);


    dispatch({ type: CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_FAIL, payload: error.response.data.message });
  }
};

// amenity

export const getAmenityByCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: AMENITY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${url}/get/amenity?id=${id}`, config);

    dispatch({ type: AMENITY_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({ type: AMENITY_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
