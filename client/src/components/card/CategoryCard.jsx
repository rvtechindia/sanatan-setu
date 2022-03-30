import React from "react";
import { Link, useHistory } from "react-router-dom";

export const CategoryCard = ({ places, category, icon, image, id }) => {
  const history = useHistory();

  return (
    <>
      <div className="col-md-2">
        <div className="single-category">
          <div className="icon">
            {image ? <image src={image} /> : <i className={icon}></i>}
          </div>
          <h3>{category}</h3>
          <p>{places} Places</p>
          <Link
            className="link-btn"
            to={{
              pathname: `business/${category}`,
              state: { keyword: id },
            }}
          ></Link>{" "}
        </div>
      </div>
    </>
  );
};
