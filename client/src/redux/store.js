import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducers/userReducer";

import { categoryReducer, amenityReducer } from "./reducers/categoryReducer";

import {
  companyReducer,
  companyDeatailReducer,
  newCompanyReducer,
  myCompanyReducer,
  favReducer,
  newReviewReducer,
  myReviewReducer,
} from "./reducers/companyReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  category: categoryReducer,
  amenity: amenityReducer,
  company: companyReducer,
  companyDetail: companyDeatailReducer,
  newCompany: newCompanyReducer,
  myCompany: myCompanyReducer,
  wishlist: favReducer,
  newReview: newReviewReducer,
  myReview: myReviewReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persister = persistStore(store);

export { store, persister };
