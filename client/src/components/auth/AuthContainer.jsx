import React, { Children } from "react";

const AuthContainer = ({ children, title, tagline }) => {
  return (
    <section className="padding80">
      <div className="container">
        <div className="row login">
          <div className="col-md-12">
            <div className="box">
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <h2>Log in to your Account</h2>
                  <div className="icon">
                    <div className="eltd-separator">
                      <span style={{ width: 85, height: 1 }}></span>
                    </div>
                    <div className="eltd-separator-icon">
                      <i className="fas fa-cog"></i>
                    </div>
                    <div className="eltd-separator">
                      <span style={{ width: 85, height: 1 }}></span>
                    </div>
                  </div>
                  <p>
                    To list your business or view details of other businesses on
                    Sanatan Setu, Register or Login below.
                  </p>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthContainer;
