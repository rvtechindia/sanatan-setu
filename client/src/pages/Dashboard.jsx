import React, { useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../utils/toast";
import Header from "../components/header/Header";
import { Caption } from "../components/breadcrum/Caption";
import { logout } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListCard } from "../components/card/ListCard";

//actions

import { getMyCompanies, getFavourite } from "../redux/actions/companyAction";
import { updateProfile } from "../redux/actions/userAction";

export const Dashboard = ({ history }) => {
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const { myBusiness } = useSelector((state) => state.myCompany);
  const { fav } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [ProfileData, setProfileData] = useState({
    name: "",
    emai: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
    }
    dispatch(getMyCompanies());
  }, [isAuthenticated, history, dispatch]);

  useEffect(() => {
    dispatch(getFavourite());
  }, []);

  const handleProfileUpdate = () => {
    const formData = new FormData();
    formData.append("name", ProfileData.name);
    formData.append("email", ProfileData.email);
    dispatch(updateProfile(formData));
  };

  const signOutUser = () => {
    notifySuccess("Logout Successfully");
    dispatch(logout());
  };

  const ProfileChange = (e) => {
    const { name, value } = e.target.value;
    switch (name) {
      case "p-name":
        setProfileData({ ...ProfileData, name: value });
        break;
      case "p-email":
        setProfileData({ ...ProfileData, email: value });
    }
  };

  return (
    <>
      <Caption title="Dashboard">
        <Header />
      </Caption>
      <section className="padding80">
        <div className="container">
          <div className="row dashboard">
            <div className="col-md-12">
              <div className="box">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="my-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#my-profile"
                          type="button"
                          role="tab"
                          aria-controls="my-profile"
                          aria-selected="true"
                        >
                          <i className="far fa-user"></i> My Profile
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="edit-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#edit-profile"
                          type="button"
                          role="tab"
                          aria-controls="edit-profile"
                          aria-selected="false"
                        >
                          <i className="fas fa-pencil-alt"></i> Edit Profile
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="new-listing-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#new-listing"
                          type="button"
                          role="tab"
                          aria-controls="new-listing"
                          aria-selected="false"
                        >
                          <i className="far fa-file"></i> Add Business
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="my-listings-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#my-listings"
                          type="button"
                          role="tab"
                          aria-controls="my-listings"
                          aria-selected="false"
                        >
                          <i className="fas fa-layer-group"></i> My Listings
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="wishlist-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#wishlist"
                          type="button"
                          role="tab"
                          aria-controls="wishlist"
                          aria-selected="false"
                        >
                          <i className="far fa-star"></i> My Wishlist
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          onClick={() => signOutUser()}
                        >
                          <i className="fas fa-sign-out-alt"></i>Log out
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="my-profile"
                        role="tabpanel"
                        aria-labelledby="my-profile-tab"
                      >
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            <div className="text-center">
                              <h2>My Profile</h2>
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
                                Welcome to your profile page. This is a brief
                                overview of your user profile. You can change
                                <br />
                                the information below by visiting the ???Edit
                                Profile??? page.
                              </p>
                            </div>
                            <div className="account mb-4">
                              <h5>Your Account</h5>
                              <div className="use-info">
                                <div className="row">
                                  <div className="col-md-2">
                                    {" "}
                                    <img
                                      src="assets/images/use.jpg"
                                      className="profile"
                                    />{" "}
                                  </div>
                                  <div className="col-md-7">
                                    <p>
                                      You are currently signed in as{" "}
                                      <a href="#">{user && user.email}</a>
                                    </p>
                                  </div>
                                  <div className="col-md-3 text-center">
                                    {" "}
                                    <Link
                                      onClick={() => signOutUser()}
                                      className="button"
                                    >
                                      Sign out{" "}
                                      <i className="fas fa-chevron-right"></i>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="account mb-4">
                              <h5>Mail</h5>
                              <p>
                                <b>
                                  <a href="#">{user?.email}</a>
                                </b>
                              </p>
                            </div> */}
                            {/* <div className="account mb-4">
                              <h5>Social Profiles </h5>
                              <div className="use-info-1">
                                <div className="row">
                                  <div className="col-md-12">
                                    <p className="text-center mb-0">
                                      Your wishlist is empty.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="edit-profile"
                        role="tabpanel"
                        aria-labelledby="edit-profile-tab"
                      >
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            <div className="text-center">
                              <h2>Edit Profile</h2>
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
                                This is where you can add and change your
                                profile information, including your name, social
                                <br />
                                media links, profile description, and password.
                              </p>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="input-group">
                                  <label>Name </label>
                                  <input
                                    type="text"
                                    name="p-name"
                                    onChange={ProfileChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-group">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    name="p-email"
                                    onChange={ProfileChange}
                                  />
                                </div>
                              </div>
                              {/* <div className="col-md-6">
                                <div className="input-group">
                                  <label>Mobil </label>
                                  <input type="text" />
                                </div>
                              </div> */}

                              <div className="col-md-12 text-center mt-3">
                                <div className="input-group">
                                  <input
                                    type="submit"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleProfileUpdate();
                                    }}
                                    value="Update Profile"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="new-listing"
                        role="tabpanel"
                        aria-labelledby="new-listing-tab"
                      >
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            <div className="text-center">
                              <h2>Create a new Listing</h2>
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
                                his page contains all of your created listings.
                                You can edit your existing listings, and see
                                which listings have
                                <br />
                                been published and which are still pending
                                approval.
                              </p>
                            </div>
                            <div className="account mb-4">
                              <div className="use-info">
                                <div className="row">
                                  <div className="col-md-12 text-center">
                                    <p className="pt-0">
                                      You currently have no listings
                                    </p>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    {" "}
                                    <Link
                                      to="/listbusiness"
                                      className="button mt-0"
                                    >
                                      Add New Business
                                      <i className="fas fa-chevron-right"></i>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="my-listings"
                        role="tabpanel"
                        aria-labelledby="my-listings-tab"
                      >
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            <div className="text-center">
                              <h2>My Listings</h2>
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
                                his page contains all of your created listings.
                                You can edit your existing listings, and see
                                which listings have
                                <br />
                                been published and which are still pending
                                approval.
                              </p>
                            </div>

                            <div className="account mb-4">
                              <div className="use-info">
                                <div className="row">
                                  <div className="col-md-12 text-center">
                                    <p className="pt-0">
                                      You currently have{" "}
                                      {myBusiness?.length
                                        ? myBusiness.length
                                        : "0"}{" "}
                                      listings
                                    </p>
                                  </div>

                                  {!myBusiness?.length ? (
                                    <div className="col-md-12 text-center">
                                      {" "}
                                      <Link
                                        to="/listbusiness"
                                        className="button mt-0"
                                      >
                                        Add My Business
                                        <i className="fas fa-chevron-right"></i>
                                      </Link>{" "}
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}

                                  <article>
                                    <div className="container">
                                      <div className="row featured">
                                        {myBusiness &&
                                          myBusiness.map((item) => (
                                            <>
                                              <ListCard
                                                key={item.id}
                                                id={item.id}
                                                name={item.businessName}
                                                category={item.category}
                                                location={item.location}
                                                phone={item.phone}
                                                image={
                                                  item.image && item.image.url
                                                }
                                                type={item.Status}
                                              />

                                            </>
                                          ))}
                                      </div>
                                    </div>
                                  </article>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="wishlist"
                        role="tabpanel"
                        aria-labelledby="wishlist-tab"
                      >
                        <div className="row justify-content-center">
                          <div className="col-md-10">
                            <div className="text-center">
                              <h2>My Wishlist</h2>
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
                              Your Wishlist is Empty.
                              </p>
                            </div>
                            <div className="account mb-4">
                              <div className="use-info">
                                <div className="row">
                                  <div className="col-md-12 text-center">
                                    <p className="pt-0">
                                    Browse businesses and start adding them as in your Wishlist.
                                    </p>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    {" "}
                                    <Link
                                      to="/listingPage"
                                      className="button mt-0"
                                    >
                                     Explore Businesses
                                      <i className="fas fa-chevron-right"></i>
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <article>
                              <div className="container">
                                <div className="row featured">
                                  {fav &&
                                    fav.map((item) => (
                                      <>
                                        <ListCard
                                          key={item.id}
                                          id={item.id}
                                          name={item.businessName}
                                          category={item.category}
                                          location={item.location}
                                          phone={item.phone}
                                          image={item.image && item.image.url}
                                          type={item.Status}
                                        />
                                      </>
                                    ))}
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
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
  );
};
