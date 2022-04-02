import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { ListCard } from "../components/card/ListCard";
import { Loader } from "../components/loader/Loader";
import Carousel from "../components/carousel/Carousel";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";

import { apiURL } from "../routes/api";
import { Caption } from "../components/breadcrum/Caption";

const ListingPage = ({ history }) => {
  const { company } = useSelector((state) => state.company);
  const { category } = useSelector((state) => state.category);
  const [searchData, setSearchData] = useState([]);
  const [keywords, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  var { keyword } = useParams();

  const [breadcum, setBreadcum] = useState("");

  const location = useLocation();

  

  useEffect(() => {
    if (location.state) {
      keyword = location.state.keyword;
    }
    search(keyword);
    searchByCategory(keyword);
  }, [location]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const search = async (id) => {
    await axios
      .get(`${apiURL}/api/v1/employer/company/search?keyword=${id}`)
      .then((res) => {
        setSearchData(res.data.searchData);
        setBreadcum("search Results");
      })
      .catch((e) => console.log(e));

    setTimeout(() => setLoading(false), 1000);
  };

  const searchByCategory = async (id) => {
    await axios
      .get(`${apiURL}/api/v1/employer/company/search?category=${id}`)
      .then((res) => {
        setSearchData(res.data.searchData);
        setBreadcum(res.data.searchData[0].category);
      })
      .catch((e) => console.log(e));
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      <div className="banner-bg">
        <Header />
        <Caption title={breadcum} />
      </div>
      <section className="padding80">
        <div className="container">
          <div className="row popular">
            <div className="col-md-12 text-center">
              <h5>
                {searchData.length > 0
                  ? `Showing 1 – ${searchData && searchData.length} of ${
                      searchData && searchData.length
                    } results for '${keyword}'`
                  : `No Result Found for '${keyword}'`}
              </h5>
            </div>
            {!searchData.length > 0 && (
              <div className="col-md-12">
                <div
                  className="input-group"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="submit"
                    value="Explore Directories"
                    onClick={(e) => {
                      history.push("/listingPage");
                    }}
                  />
                </div>
              </div>
            )}
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
      )
      <section className="padding-top background-2">
        <div className="container">
          <div className="row local-businesses">
            <div className="col-md-8">
              <h3>What do you want</h3>
              <h2>
                Discover Great Local
                <br />
                Businesses in Your Area
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
