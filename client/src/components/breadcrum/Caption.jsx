import React from "react";

export const Caption = ({ children, title }) => {
  return (
    <div className="inner-banner">
      {children}
      <figcaption className="padding80">
        <div className="container">
          <div className="row category-banner">
            <div className="col-md-12 text-center">
              <h2>{title}</h2>
              <div className="breadcrum">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </figcaption>
    </div>
  );
};
