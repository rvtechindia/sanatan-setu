import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import AuthContainer from "../components/auth/AuthContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../redux/actions/userAction";
import { notifySuccess, notifyError } from "../utils/toast";
import GoogleAuth from "../utils/GoogleAuth";

const ForgotPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      notifyError(error);
      dispatch(clearErrors());
    }
    if (success) {
      notifySuccess("Password Changed !");
      history.push("/login");
    }
  }, [error, success, dispatch, history]);

  const handleSubmit = async () => {
    const myform = new FormData();
    myform.append("", password);
    myform.append("confirmPassword", confirmPassword);
    dispatch(resetPassword(match.params.token, myform));
  };

  return (
    <>
      <Caption title="Reset Password">
        <Header />
      </Caption>
      <AuthContainer title=" " tagline=" ">
        <div className="col-md-4 mt-5" id="lost">
          <div className="title">Reset Password?</div>
          <div className="form">
            <div className="input-group">
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="input-group text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
