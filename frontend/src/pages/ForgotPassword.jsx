import React from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Caption title="ForgotPassword">
        <Header />
      </Caption>
      <AuthContainer>
        <div className="col-md-4 mt-5" id="lost">
          <div className="title">Lost Password?</div>
          <div className="form">
            <div className="input-group">
              <input type="text" placeholder="Enter username or email" />
            </div>
            <div className="input-group text-center">
              <button>New Password</button>
            </div>
            <div className="action-holder">
              <p>Password reset link will be sent to your email</p>
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

export default ForgotPassword;
