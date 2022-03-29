import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { ListCard } from "../components/card/ListCard";
import { Loader } from "../components/loader/Loader";
import Carousel from "../components/carousel/Carousel";
import axios from "axios";
import { apiURL } from "../routes/api";

const ListingPage = ({ history }) => {
  const { company } = useSelector((state) => state.company);
  const { category } = useSelector((state) => state.category);
  const [searchData, setSearchData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setCategory] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  const executeScroll = () => {
    searchRef.current.scrollIntoView();
  };

  const search = async (keyword, category) => {
    let link = `${apiURL}/api/v1/employer/company/search?keyword=${keyword}&category=${category}`;
    if (!keyword)
      link = `${apiURL}/api/v1/employer/company/search?category=${category}`;

    if (!category)
      link = `${apiURL}/api/v1/employer/company/search?keyword=${keyword}`;

    await axios
      .get(link)
      .then((res) => {
        setSearchData(res.data.searchData);
        executeScroll();
      })
      .catch((e) => console.log(e));
    setTimeout(() => setLoading(false), 1000);
  };

  // const searchByCategory = async (category) => {
  //   await axios
  //     .get(
  //       `http://localhost:3001/api/v1/employer/company/search?keyword=${keyword}`
  //     )
  //     .then((res) => setSearchData(res.data.searchData))
  //     .catch((e) => console.log(e));
  //   setTimeout(() => setLoading(false), 1000);
  // };

  return (
    <>
      {loading && <Loader />}
      <div className="banner-bg">
        <Header />
        <figure className="padding80 mt-5 pb-5">
          <div className="container">
            <div className="row category-banner">
              <div className="col-md-12 text-center mt-5">
                <h2>Welcome To The Biggest Business Directory</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
              </div>
              <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                <div className="search-box">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Phrase or Keywords"
                          onChange={(e) => setKeyword(e.target.value)}
                          onKeyDown={(e) => {
                            setLoading(true);
                            e.key === "Enter" &&
                              search(keyword, selectedCategory);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="input-group">
                        <select
                          className="form-select"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option selected>Select Category</option>
                          {category?.map((item) => {
                            return (
                              <option key={item._id} value={item._id}>
                                {item.businessCategory}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <input
                          type="submit"
                          value="Search Here"
                          onClick={(e) => {
                            setLoading(true);
                            e.preventDefault();
                            search(keyword, selectedCategory);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <section>
        <div className="container">
          <div className="row category-num">
            <div className="col-md-12">
              <div className="box">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                    <div className="d-flex">
                      <div className="icon bg">
                        <i className="fas fa-layer-group"></i>
                      </div>
                      <div className=" mt-3">
                        <h3>69,856</h3>
                        <p>Total Listings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                    <div className="d-flex">
                      <div className="icon bg2">
                        {" "}
                        <i className="far fa-star"></i>{" "}
                      </div>
                      <div className=" mt-3">
                        <h3>6854</h3>
                        <p>Featured Listings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-sm-0">
                    <div className="d-flex">
                      <div className="icon bg3">
                        <i className="far fa-heart"></i>
                      </div>
                      <div className=" mt-3">
                        <h3>6354</h3>
                        <p>Top Listings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div className="d-flex">
                      <div className="icon bg4">
                        <i className="far fa-map"></i>
                      </div>
                      <div className=" mt-3">
                        <h3>8754</h3>
                        <p>Locations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {searchData.length > 0 && (
        <section className="padding80" ref={searchRef}>
          <div className="container">
            <div className="row popular">
              <div className="col-md-12 text-center">
                <h5>  {searchData.length > 0
                  ? `Showing 1 – ${searchData && searchData.length} of ${
                      searchData && searchData.length
                    } results for '${keyword}'`
                  : "No Result Found"}</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                  <br />
                  et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra.
                </p>
              </div>

              <article>
                <div className="container">
                  <div className="row featured">
                    {searchData &&
                      searchData.map((item) => {
                        return (
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
                        );
                      })}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
      {searchData.length === 0 && (
        <section className="padding80">
          <div className="container">
            <div className="row popular">
              <div className="col-md-12 text-center">
                <h2>Popular Business Directories</h2>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                  <br />
                  et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra.
                </p>
              </div>

              <article>
                <div className="container">
                  <div className="row featured">
                    {company &&
                      company.map((item) => {
                        return (
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
                        );
                      })}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
      <section className="padding-top background-2">
        <div className="container">
          <div className="row local-businesses">
            <div className="col-md-8">
              <h3>What do you want</h3>
              <h2>
                Discover Great Local
                <br />
                Businesses in Dubai
              </h2>
            </div>
            <div className="col-md-4">
              <div className="content-box text-center">
                <div className="icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <div className="num">110</div>
                <p className="title">
                  Businesses
                  <br />
                  Listings are on
                  <br />
                  our directory
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside className="padding80">
        <div className="container">
          <div className="row customer">
            <div className="col-md-12">
              <h3>What Our Customer Are Saying?</h3>
              <p>
                The biggest reward is to satisfy our clients and share their
                experience with us
              </p>
            </div>
            <div className="col-md-12">
              <Carousel id="customer">
                <div className="item">
                  <p>
                    <i className="fas fa-quote-left"></i>
                  </p>
                  <h4>Improved Our Productivity</h4>
                  <p className="pb-4">
                    Listbook impressed me on multiple levels. No matter where
                    you go this is the coolest, most happening thing around. And
                    if I had Listbook available for me a couple of years back
                    then I would have already doubled my business by now.
                  </p>
                  <div className="float-start">
                    <img src="assets/images/author-1.jpg" className="profile" />
                  </div>
                  <div className="float-start">
                    <h5>Anna Andrews</h5>
                    <p className="small">Listbook User</p>
                  </div>
                </div>
                <div className="item">
                  <p>
                    <i className="fas fa-quote-left"></i>
                  </p>
                  <h4>Very Effective For Our Business</h4>
                  <p className="pb-4">
                    We have seen some amazing results already and we are loving
                    Listbook. Listbook is amazing and everyone who is using this
                    is loving it. Listbook was, is and always will be worth a
                    fortune to my company and it is vital to my company growth.
                  </p>
                  <div className="float-start">
                    <img src="assets/images/author-2.jpg" className="profile" />
                  </div>
                  <div className="float-start">
                    <h5>Robert Wright</h5>
                    <p className="small">Listbook User</p>
                  </div>
                </div>
                <div className="item">
                  <p>
                    <i className="fas fa-quote-left"></i>
                  </p>
                  <h4>Great Platform To Start With</h4>
                  <p className="pb-4">
                    Thanks guys, keep up the good work! I strongly recommend
                    listing to everyone interested in running a successful
                    directory business! We needed some direction how to scale
                    our business with ease and this was the perfect match.
                  </p>
                  <div className="float-start">
                    <img src="assets/images/author-3.jpg" className="profile" />
                  </div>
                  <div className="float-start">
                    <h5>Robert Wright</h5>
                    <p className="small">Listbook User</p>
                  </div>
                </div>
                <div className="item">
                  <p>
                    <i className="fas fa-quote-left"></i>
                  </p>
                  <h4>Very Effective For Our Business</h4>
                  <p className="pb-4">
                    We have seen some amazing results already and we are loving
                    Listbook. Listbook is amazing and everyone who is using this
                    is loving it. Listbook was, is and always will be worth a
                    fortune to my company and it is vital to my company growth.
                  </p>
                  <div className="float-start">
                    <img src="assets/images/author-2.jpg" className="profile" />
                  </div>
                  <div className="float-start">
                    <h5>Robert Wright</h5>
                    <p className="small">Listbook User</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ListingPage;
