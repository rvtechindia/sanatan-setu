import React from "react";

export const CategoryCard = ({ places, category, icon, image }) => {
  return (
    <>
      <div className="col-md-2">
        <div className="single-category">
          <div className="icon">
            {image ? <image src={image} /> : <i className={icon}></i>}
          </div>
          <h3>{category}</h3>
          <p>{places} Places</p>
          <a className="link-btn" href="#"></a>{" "}
        </div>
      </div>
    </>
  );
};
