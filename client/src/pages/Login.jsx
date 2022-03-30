import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { notifyError, notifySuccess } from "../utils/toast";
import GoogleAuth from "../utils/GoogleAuth";

import { validateLoginDetails } from "../utils/Validator";

const Login = ({ history,location }) => {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const redirect = location.search ? location.search.split('=')[1] : "/dashboard"

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect);
      notifySuccess("Login Successfully");
    }

    if (error === "Please Login to access this resource") {
      return;
    } else {
      notifyError(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error]);

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setLoginDetails({ ...loginDetails, email: value });
        break;
      case "password":
        setLoginDetails({ ...loginDetails, password: value });
        break;
      case "default":
        break;
    }
  };

  const handleLogin = () => {
    const error = validateLoginDetails(loginDetails);
    dispatch(login(loginDetails.email, loginDetails.password));
  };

  return (
    <>
      <Caption title="Login">
        <Header />
      </Caption>
      <AuthContainer>
        <div className="col-md-4 mt-5" id="login">
          <div className="title">Log in</div>
          <div className="form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <div className="form-check col-md-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  {" "}
                  Remember me
                </label>
              </div>
              <div className="text-end col-md-6">
                <Link to="/forgot">Lost Your Password?</Link>
              </div>
            </div>
            <div className="border-1"></div>
            <div className="input-group text-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Log in
              </button>
            </div>
            <div className="action-holder">
              <p>Don't have an account? Want to create?</p>
              <Link to="/register">Sign up</Link>{" "}
            </div>
            <div className="social-login">
              <p>Connect with Social Networks</p>
              <GoogleAuth />
            </div>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default Login;
