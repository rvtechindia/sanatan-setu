import {
  COMPANY_REQUEST,
  COMPANY_SUCCESS,
  CLEAR_ERRORS,
  COMPANY_FAIL,
  COMPANY_DETAIL_REQUEST,
  COMPANY_DETAIL_SUCCESS,
  COMPANY_DETAIL_FAIL,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_FAIL,
  ADD_COMPANY_SUCCESS,
  COMPANY_ME_REQUEST,
  COMPANY_ME_SUCCESS,
  COMPANY_ME_FAIL,
  FAVOURITE_REQUEST,
  FAVOURITE_SUCCESS,
  FAVOURITE_FAIL,
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
  REVIEW_FAIL,
  MY_REVIEW_REQUEST,
  MY_REVIEW_SUCCESS,
  MY_REVIEW_FAIL,
} from "../constants/companyConstants";

export const companyReducer = (state = { company: [] }, action) => {
  switch (action.type) {
    case COMPANY_REQUEST:
      return {
        loading: true,
      };
    case COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };
    case COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        company: null,
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

export const companyDeatailReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case COMPANY_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case COMPANY_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };
    case COMPANY_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        company: null,
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

export const newCompanyReducer = (state = { newCompany: {} }, action) => {
  switch (action.type) {
    case ADD_COMPANY_REQUEST:
      return {
        loading: true,
      };
    case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };
    case ADD_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        company: null,
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

export const myCompanyReducer = (state = { myBusiness: [] }, action) => {
  switch (action.type) {
    case COMPANY_ME_REQUEST:
      return {
        loading: true,
      };
    case COMPANY_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        myBusiness: action.payload,
      };
    case COMPANY_ME_FAIL:
      return {
        ...state,
        loading: false,
        myBusiness: null,
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

export const favReducer = (state = { fav: [] }, action) => {
  switch (action.type) {
    case FAVOURITE_REQUEST:
      return {
        loading: true,
      };
    case FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        fav: action.payload,
      };
    case FAVOURITE_FAIL:
      return {
        ...state,
        loading: false,
        fav: null,
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

export const newReviewReducer = (state = { review: {} }, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return {
        loading: true,
      };
    case REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        review: null,
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

export const myReviewReducer = (state = { myreview: [] }, action) => {
  switch (action.type) {
    case MY_REVIEW_REQUEST:
      return {
        loading: true,
      };
    case MY_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        myreview: action.payload,
      };
    case MY_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        myreview: null,
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
