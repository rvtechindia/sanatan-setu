import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bot-book">
                <div className="row">
                  <div className="col-md-2 text-center">
                    {" "}
                    <img
                      src="assets/images/idea.png"
                      className="img-fluid img"
                    />{" "}
                  </div>
                  <div className="col-md-7">
                    <h4>#1 Sanatan Business and Service Listing Directory</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </p>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <a href="submit-listing.php" className="btn">
                      Add my business
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Sanatan Setu Experience</h3>
              <p>
                <img src="assets/images/app.jpg" className="img-fluid" />
              </p>
              <div className="bordertop mt-4 mb-4"></div>
              <h3>Follow Us</h3>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Recent Articles</h3>
              <div className="post">
                <div className="date">22 August - 2021</div>
                <h6>Facilisis a ultricies quis dictumst fredom...</h6>
                <div className="date mt-4">22 August - 2021</div>
                <h6>Facilisis a ultricies quis dictumst fredom...</h6>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Categories</h3>
              <div className="nav">
                <ul>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Jhatka Meat Shops</a>
                  </li>
                  <li>
                    <a href="#">Tailors</a>
                  </li>
                  <li>
                    <a href="#">Barbers</a>
                  </li>
                  <li>
                    <a href="#">Shopping Malls</a>
                  </li>
                  <li>
                    <a href="#">Salon & Spas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Useful Links</h3>
              <div className="nav">
                <ul>
                  <li>
                    <a href="#">About Sanatan Setu</a>
                  </li>
                  <li>
                    <a href="#">Contact Us </a>
                  </li>
                  <li>
                    <a href="#">Legal & Privacy information</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Find Jobs</a>
                  </li>
                  <li>
                    <a href="#">List item for Sale</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bordertop mt-4 mb-4"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              Copyright © 2021 - 2022. All rights reserved!
            </div>
            <div className="col-md-3">
              Designed with <i className="fas fa-heart"></i> in Bharat
            </div>
            <div className="col-md-4 text-end">
              <a href="#">Designed and Developed</a> by WebNet Creatives
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};