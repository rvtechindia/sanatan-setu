import React from "react";
import GoogleLogin from "react-google-login";
import { clinetId } from "../routes/googleAuth";
import axios from "axios";
import { apiURL, postRequest } from "../routes/api";

const GoogleAuth = (res) => {
  const responseGoogle = async () => {
    console.log(res);
    const token = res?.token;
    postRequest({ token });
  };
  return (
    <div>
      <GoogleLogin
        clinetId={clinetId}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleAuth;
