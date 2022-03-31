import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav
              className="navbar navbar-expand-md "
              aria-label="Third navbar example"
            >
              {" "}
              <Link className="navbar-brand" to="/">
                <img src="../assets/images/logo.png" className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {" "}
                <img src="../assets/images/menu.png" />
              </button>
              <div
                className="collapse navbar-collapse  justify-content-end "
                id="navbarsExample03"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    {" "}
                    <Link to="/">Home </Link>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a href="#">Why Sanatan Setu? </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link to="/listingPage">Explore</Link>{" "}
                  </li>

                  <li className="nav-item">
                    {" "}
                    <Link to="/listbusiness">Add Business</Link>{" "}
                  </li>

                  <li className="nav-item listing">
                    {" "}
                    {isAuthenticated ? (
                      <Link to="/dashboard">Dashboard</Link>
                    ) : (
                      <Link to="/login">
                        <i className="far fa-user"></i> Login / Register
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
