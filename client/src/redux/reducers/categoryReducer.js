import {
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CLEAR_ERRORS,
  AMENITY_REQUEST,
  AMENITY_SUCCESS,
  AMENITY_FAIL,
} from "../constants/categoryConstants";

export const categoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        category: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const amenityReducer = (state = { amenity: [] }, action) => {
  switch (action.type) {
    case AMENITY_REQUEST:
      return {
        loading: true,
      };
    case AMENITY_SUCCESS:
      return {
        ...state,
        loading: false,
        amenity: action.payload,
      };
    case AMENITY_FAIL:
      return {
        ...state,
        loading: false,
        amenity: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
