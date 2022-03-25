import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/Header";
import { Loader } from "../loader/Loader";

const HomeBanner = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  return (
    <>
      {loading && <Loader />}
      <div className="banner-bg">
        <Header />
        <figure className="padding80 mt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-7 banner">
                <h1 id="check">
                  Search local sanatan businesses and{" "}
                  <span id="typewriter"> </span> here
                </h1>
                <p>
                  Find directories around the country. Add your business to
                  Braike and make sure customers always find the right
                  information about your business.
                </p>
                <div className="row">
                  <div className="col-md-10">
                    <div className="row">
                      <div className="input-group">
                        <div className="col-md-9">
                          <input
                            type="text"
                            placeholder="What are you looking for?"
                            onChange={(e) => setKeyword(e.target.value)}
                          />
                        </div>
                        <div className="col-md-3">
                          <button
                            type="submit"
                            onClick={() => {
                              if (keyword) {
                                history.push(`/business/${keyword}`);
                              } else {
                                alert("Empty Search");
                              }
                            }}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
};

export default HomeBanner;
