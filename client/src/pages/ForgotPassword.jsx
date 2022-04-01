import React, { useState } from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/actions/userAction";
import { notifySuccess } from "../utils/toast";
import GoogleAuth from "../utils/GoogleAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(forgotPassword({ email }));
  };

  return (
    <>
      <Caption title="ForgotPassword">
        <Header />
      </Caption>
      <AuthContainer title=" " tagline=" " >
        <div className="col-md-4 mt-5" id="lost">
          <div className="title">Lost Password?</div>
          <div className="form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter username or email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                New Password
              </button>
            </div>
            <div className="action-holder">
              <p>Password reset link will be sent to your email</p>
              <Link to="/login">Log in</Link>{" "}
            </div>
            <div className="social-login">
              <p>Connect with Social Networks</p>
              <ul>
                <GoogleAuth />
              </ul>
            </div>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
