import React from "react";

export const JobCard = ({ position, location, phone, jobType, image }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="item-info">
          <div className="content">
            <div className="row">
              <div className="col-2">
                <img src={image} className="icon" />
              </div>
              <div className="col-10">
                <h5>
                  <a href="#">{position}</a>
                </h5>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {location}
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    {phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" col-md-12">
            <div className="border-top"></div>
          </div>
          <div className="content-2">
            <div className="row">
              <div className="col-md-6">
                {" "}
                <a href="#" className="part">
                  <i className="far fa-bookmark"></i>
                  {jobType}{" "}
                </a>{" "}
              </div>
              <div className="col-md-6 text-end">
                {" "}
                <a href="#" className="search">
                  <i className="fas fa-search-plus"></i>
                </a>{" "}
                <a href="#" className="search">
                  <i className="far fa-heart"></i>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
