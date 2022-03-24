import React from "react";
import { Link, useHistory } from "react-router-dom";

export const ListCard = ({ category, image, name, location, phone, type,id }) => {
  
  const history = useHistory();
  return (
    <div className="col-md-3">
      <div className="listing-gird">
        <div className="image">
          {" "}
          <Link to={`/listDetails/${name}`}>
            <img src={image} className="img-fluid" />
          </Link>{" "}
        </div>
        <div className="meta">
          {" "}
          <span className="open">{type}</span>{" "}
          <span className="category">
            <Link to="/">{category}</Link>
          </span>{" "}
        </div>
        <h2>
          <Link to={`/listDetails/${id}`}>{name}</Link>
        </h2>
        <div className="meta-info">
          {" "}
          <span className="location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </span>{" "}
          <span className="phone">
            <i className="fas fa-phone-alt"></i> {phone}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
