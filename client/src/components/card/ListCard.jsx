import React from "react";
import { Link, useHistory } from "react-router-dom";

import moment from "moment";

export const ListCard = ({
  category,
  image,
  name,
  location,
  phone,
  type,
  id,
  RegistrationDate
}) => {
  const history = useHistory();
  return (
    <div className="col-md-3">
      <div className="listing-gird">
        <div className="image">
          {" "}
          <Link
            to={{
              pathname: `/listDetails/${name.replace(" ", "-")}`,
              state: { id },
            }}
          >
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
          <Link
            to={{
              pathname: `/listDetails/${name.replace(" ", "-")}`,
              state: { id },
            }}

            style={{textTransform:"capitalize"}}
          >
            {name}
          </Link>
        </h2>
        <div className="meta-info">
          {" "}
          <span className="location">
            <i className="fas fa-map-marker-alt"></i> {location}
          </span>{" "}
          <span className="phone">
            <i className="fas fa-calendar-alt"></i> {moment(RegistrationDate).format('LL')}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
