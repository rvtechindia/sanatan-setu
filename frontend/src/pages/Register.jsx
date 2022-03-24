import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, logout, clearErrors } from "../redux/actions/userAction";
import { notifyError, notifySuccess } from "../utils/toast";

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  console.log(user, loading, isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
      notifySuccess("Register Successfully");
    }

    if (error === "Please Login to access this resource") {
      return;
    } else {
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
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) setRegistrationData({ ...registrationData, avatar: files[0] });

    switch (name) {
      case "username":
        setRegistrationData({ ...registrationData, name: value });
        break;
      case "email":
        setRegistrationData({ ...registrationData, email: value });
        break;
      case "phone":
        setRegistrationData({ ...registrationData, phone: value });
        break;
      case "password":
        setRegistrationData({ ...registrationData, password: value });
        break;
      case "confirm-password":
        setRegistrationData({ ...registrationData, confirmPassword: value });
        break;
      case "user-type":
        setRegistrationData({ ...registrationData, role: value });
        break;
      case "default":
        break;
    }
    console.log(registrationData);
  };

  const handleRegistration = () => {
    const formData = new FormData();
    formData.append("name", registrationData.name);
    formData.append("email", registrationData.email);
    formData.append("password", registrationData.password);
    formData.append("avatar", registrationData.avatar);
    if (registrationData.role === "employer")
      formData.append("role", registrationData.role);
    console.log(registrationData);
    dispatch(register(formData));
  };

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
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <div className="col-md-9">
                <input
                  type="text"
                  placeholder="Mobile No."
                  name="phone"
                  onChange={handleChange}
                />
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
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Repeat Password"
                name="confirm-password"
                onChange={handleChange}
              />
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
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default Register;
