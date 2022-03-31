import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, logout, clearErrors } from "../redux/actions/userAction";
import { notifyError, notifySuccess } from "../utils/toast";
import GoogleAuth from "../utils/GoogleAuth";

import { validateRegisterDetails } from "../utils/Validator";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [validationError, setValidationError] = useState({});
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
      notifySuccess("Register Successfully");
    }

    if (error === "Please Login to access this resource") {
      return;
    } else {
      if (error === "Duplicate email Entered") {
        return notifyError("An account with this email already exists. ");
      }
      notifyError(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error]);

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    avatar: [],
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) setRegistrationData({ ...registrationData, avatar: files[0] });

    switch (name) {
      case "username":
        setRegistrationData({ ...registrationData, name: value });
        setValidationError(
          validateRegisterDetails({ ...registrationData, name: value })
        );
        break;
      case "email":
        setRegistrationData({ ...registrationData, email: value });
        setValidationError(
          validateRegisterDetails({ ...registrationData, email: value })
        );
        break;
      case "phone":
        setRegistrationData({ ...registrationData, phone: value });
        setValidationError(
          validateRegisterDetails({ ...registrationData, phone: value })
        );
        break;
      case "password":
        setRegistrationData({ ...registrationData, password: value });
        setValidationError(
          validateRegisterDetails({ ...registrationData, password: value })
        );
        break;
      case "confirm-password":
        setRegistrationData({ ...registrationData, confirmPassword: value });
        setValidationError(
          validateRegisterDetails({
            ...registrationData,
            confirmPassword: value,
          })
        );
        break;
      case "user-type":
        setRegistrationData({ ...registrationData, role: value });
        break;
      case "default":
        break;
    }
  };

  const handleRegistration = () => {
    const e = validateRegisterDetails(registrationData);
    setValidationError(e);
    if (Object.keys(e).length) return;
    const formData = new FormData();
    formData.append("name", registrationData.name);
    formData.append("email", registrationData.email);
    formData.append("password", registrationData.password);
    formData.append("avatar", registrationData.avatar);
    if (registrationData.role === "employer")
      formData.append("role", registrationData.role);
    dispatch(register(formData));
  };
  // console.log(checked);
  return (
    <>
      <Caption title="Register">
        <Header />
      </Caption>
      <AuthContainer>
        <div className="col-md-4 mt-5" id="signup">
          <div className="title">Sign up</div>
          <div className="form">
            <div className="input-group">
              <input
                type="text"
                placeholder="User Name"
                name="username"
                onChange={handleChange}
              />
              {validationError.name && (
                <label style={{ color: "red", fontSize: ".7rem" }}>
                  {validationError.name}
                </label>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              {validationError.email && (
                <label style={{ color: "red", fontSize: ".7rem" }}>
                  {validationError.email}
                </label>
              )}
            </div>
            <div className="input-group">
              <div className="col-md-9">
                <input
                  type="text"
                  placeholder="Mobile No."
                  name="phone"
                  onChange={handleChange}
                />
                {validationError.phone && (
                  <label style={{ color: "red", fontSize: ".7rem" }}>
                    {validationError.phone}
                  </label>
                )}
              </div>
              <div className="col-md-3 text-end">
                <a onClick={() => console.log("clicked")} className="verify">
                  Verify
                </a>
              </div>
            </div>
            <div className="input-group" id="otp" style={{ display: "none" }}>
              <input type="text" placeholder="Enter OTP" />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                style={{
                  width: "100%",
                  border: "1px solid grey",
                  padding: ".3rem",
                  paddingLeft: "1rem",
                }}
                placeholder="Password"
                onChange={handleChange}
              />
              {validationError.password && (
                <label style={{ color: "red", fontSize: ".7rem" }}>
                  {validationError.password}
                </label>
              )}
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Repeat Password"
                name="confirm-password"
                style={{
                  width: "100%",
                  border: "1px solid grey",
                  padding: ".3rem",
                  paddingLeft: "1rem",
                }}
                onChange={handleChange}
              />
              {validationError.confirmPassword && (
                <label style={{ color: "red", fontSize: ".7rem" }}>
                  {validationError.confirmPassword}
                </label>
              )}
            </div>
            <div className="form-check col-md-12">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={checked}
                id="defaultCheck1"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    checked: e.target.checked,
                  });
                  validateRegisterDetails({ checked: e.target.checked });
                }}
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                {" "}
                I agree to the <a href="#">Privacy Policy</a> &{" "}
                <a href="#">Terms of Services </a>
              </label>
              {validationError.checked && (
                <label style={{ color: "red", fontSize: ".7rem" }}>
                  {validationError.checked}
                </label>
              )}
            </div>
            <div className="border-1"></div>
            <div className="input-group text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleRegistration();
                }}
              >
                Register
              </button>
            </div>

            <div className="action-holder">
              <p>Have an account? Log in?</p>
              <Link to="/login">Log in</Link>{" "}
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

export default Register;
