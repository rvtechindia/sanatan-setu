import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { Caption } from "../components/breadcrum/Caption";
import Carousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";

import { notifyError, notifySuccess } from "../utils/toast";
import { apiURL } from "../routes/api";

import axios from "axios";

/// actions import

import { getcompanyDetails } from "../redux/actions/companyAction";
import StarRating from "../components/rating/StarRating";

export const ListingDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [serviceRating, setServiceRating] = useState(0);
  const [priceRating, setPriceRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const serviceRatingcallback = useCallback((count) => {
    setServiceRating(count);
  }, []);
  const priceRatingcallback = useCallback((count) => {
    setPriceRating(count);
  }, []);
  const qualityRatingcallback = useCallback((count) => {
    setQualityRating(count);
  }, []);
  const locationRatingcallback = useCallback((count) => {
    setLocationRating(count);
  }, []);
  const { id } = location.state;

  const { company, loading } = useSelector((state) => state.companyDetail);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getcompanyDetails(id));
  }, [location]);

  // useEffect(() => {
  //   // if (!isAuthenticated) {
  //   //   notifyError("please register/login to view company details")
  //   //   history.push("/");
  //   // }
  // }, []);

  const addToFav = async (id, name) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
   await axios
      .post(
        `${apiURL}/api/v1/employer/add/fav?id=${id}`,
        {
          businessName: name,
        },
        config
      )
      .then((res) => {
        notifySuccess(res.data.message);
      })
      .catch((e) => notifyError(e.response.data.message));
  };

  return (
    <>
      <Caption title={company?.businessName}>
        <Header />
      </Caption>
      {!loading ? (
        <>
          <section className="padding40" style={{ marginTop: -90 }}>
            <div className="container">
              <div className="row detail">
                <div className="col-md-12">
                  <div className="box margin-130">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="business-logo">
                              <img
                                src={company.logo?.url}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="categories">
                              {company.category?.businessCategory}
                            </div>
                            <h1>
                              {company.businessName}{" "}
                              <i className="fas fa-check-circle"></i>
                            </h1>
                            <p className="categories">{company.tagline}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 text-end">
                        <p className="favorite">
                          <Link
                            onClick={() =>
                              addToFav(company._id, company.businessName)
                            }
                          >
                            <i className="far fa-star"></i> Add to Favorite
                          </Link>
                        </p>
                        <div className="row">
                          <div className="col-md-5 text-end">
                            <p className="price">
                              Price range
                              <br />
                              <i className="fas fa-rupee-sign"></i>{" "}
                              <i className="fas fa-rupee-sign"></i>
                            </p>
                          </div>
                          <div className="col-md-7">
                            <button className="message">
                              <i className="far fa-comments"></i> Direct message
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-4">
                        <Carousel id="customer">
                          <div className="item">
                            {" "}
                            <img src="../assets/images/power-footwear-gallery1.jpg" />{" "}
                          </div>
                          <div className="item">
                            {" "}
                            <img src="../assets/images/power-footwear-gallery2.jpg" />{" "}
                          </div>
                          <div className="item">
                            {" "}
                            <img src="../assets/images/power-footwear-gallery3.jpg" />{" "}
                          </div>
                          <div className="item">
                            {" "}
                            <img src="../assets/images/power-footwear-gallery4.jpg" />{" "}
                          </div>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ">
            <div className="container">
              <div className="row detail">
                <div className="col-md-8">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-12 content">
                        <h2>
                          {" "}
                          We believe in what we do and the products and
                          businesses we work with to make a difference to
                          people’s lives.{" "}
                        </h2>
                        <p>
                          Help people find the best hot locations with Search &
                          Go. Start your own directory website today and let
                          users create and claim their own listings. Connect
                          with PayPal to start earning money. Make your own
                          custom directory packages and listing types. Connect
                          with Facebook and Google+ to let users log in through
                          their social network profiles. Add beautiful Google
                          Maps and easily customize their style. Enable booking
                          powered by OpenTable. Create an awesome user dashboard
                          that has all the options necessary for users to fully
                          customize their own listings. And so much more.
                        </p>
                        <p>
                          Search & Go is full of powerful and practical options
                          for making an awesome directory website. And it’s
                          immensely easy to use. Don’t wait. Purchase Search &
                          Go now and start creating your own incredible
                          directory website today.
                        </p>
                      </div>
                      <div className="col-md-12">
                        <h4>Amenities</h4>
                        <div className="list-1 mt-3">
                          <ul>
                            <li>Wi-Fi</li>
                            <li>Free Parking</li>
                            <li>Credit Card Payment</li>
                            <li>Wheelchair Accessible</li>
                            <li>Pet Friendly</li>
                            <li>Free Delivery</li>
                          </ul>
                        </div>
                      </div>

                      {/* <div className="col-md-12 mt-4">
                        <h4>Tags</h4>
                        <div className="list-2 mt-3">
                          <ul>
                            <li>
                              <a href="#">shop</a>
                            </li>
                            <li>
                              <a href="#">stylish</a>
                            </li>
                            <li>
                              <a href="#">fashion</a>
                            </li>
                            <li>
                              <a href="#">designer</a>
                            </li>
                            <li>
                              <a href="#">footwear</a>
                            </li>
                            <li>
                              <a href="#">shoes</a>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <div className="col-md-12 mt-4">
                        <iframe
                          src="https://player.vimeo.com/video/101004693?h=e6c7054066&dnt=1&app_id=122963"
                          width="100%"
                          height="400"
                        ></iframe>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="heading">Enquire now</div>
                    <div className="enquire mb-4">
                      <div className="input-group">
                        <input type="text" placeholder="Your Name *" />
                      </div>
                      <div className="input-group">
                        <input type="text" placeholder="Email *" />
                      </div>
                      <div className="input-group">
                        <input type="text" placeholder="Phone No. *" />
                      </div>
                      <div className="input-group">
                        <textarea placeholder="Message"></textarea>
                      </div>
                      <div className="input-group">
                        <input type="submit" value="Submit Review" />
                      </div>
                    </div>
                  </div>
                  {!company && (
                    <div className="box mt-5">
                      <div className="heading">Claim Listing</div>
                      <div className="claim">
                        <p>Is this your business?</p>
                        <p>
                          Claim listing is the best way to manage and protect
                          your business.
                        </p>
                        <p>
                          <Link to="/" className="button">
                            Claim This Listing
                          </Link>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="padding40">
            <div className="container">
              <div className="row detail">
                <div className="col-md-8">
                  <div className="box">
                    <div className="row">
                      <div className="col-md-12 ">
                        <h4>Add Review</h4>
                        <div className="rating mt-4">
                          <ul>
                            <li>
                              Service?
                              <br />
                              <StarRating parentCallback={serviceRatingcallback} />
                            </li>
                            <li>
                              Price?
                              <br />
                              <StarRating parentCallback={priceRatingcallback} />
                            </li>
                            <li>
                              Quality?
                              <br />
                              <StarRating parentCallback={qualityRatingcallback} />
                            </li>
                            <li>
                              Location?
                              <br />
                              <StarRating parentCallback={locationRatingcallback} />
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix mb-4"></div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group">
                              <label>
                                Name <span className="red">*</span>
                              </label>
                              <input type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group">
                              <label>
                                Email <span className="red">*</span>
                              </label>
                              <input type="text" placeholder="Your Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-group">
                              <label>Review</label>
                              <textarea placeholder="Review"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 input-group">
                            <input type="submit" value="Submit Review" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
