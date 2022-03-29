import React from "react";
import HomeBanner from "../components/banner/HomeBanner";
import { CategoryCard } from "../components/card/CategoryCard";
import { ListCard } from "../components/card/ListCard";
import { ListingData } from "../utils/listingData";
import { CategoryData } from "../utils/categoryData";
import { JobData } from "../utils/jobListingData";
import { JobCard } from "../components/card/JobCard";
import Carousel from "../components/carousel/Carousel";
import { useSelector } from "react-redux";

export const Home = () => {
  const { company } = useSelector((state) => state.company);
  const { category } = useSelector((state) => state.category);
 
  return (
    <>
      <HomeBanner />

      <section className="padding80">
        <div className="container">
          <div className="row popular">
            <div className="col-md-12 text-center">
              <h2>What Can We Help You Find?</h2>
              <p className="mb-5">
                Explore our Popular categories
                <br />
              </p>
            </div>
            {category &&
              category.map((item, id) => {
                return (
                  <CategoryCard
                    key={id}
                    id={item._id}
                    category={item.businessCategory}
                    places={item.places}
                    icon={item.icon}
                  />
                );
              })}

            <div className="col-md-2">
              <div className="single-category more-categories">
                <div className="icon">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <h3>More Categories</h3>
                <a className="link-btn" href="category-listing.php"></a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article>
        <div className="container">
          <div className="row featured">
            <div className="col-md-12">
              <h3>Featured Businesses</h3>
              <p>Popular and exclusive listings in our Sanatan directory</p>
            </div>
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
      {/* <article className="padding80">
        <div className="container">
          <div className="row jop-openings">
            <div className="col-md-12 text-center">
              <h3>Latest Jop openings</h3>
              <h4 className="mb-5">Find job openings around you</h4>
            </div>
            {JobData &&
              JobData.map((item, id) => {
                return (
                  <JobCard
                    id={id}
                    key={id}
                    position={item.position}
                    location={item.location}
                    phone={item.phone}
                    image={item.image}
                    jobType={item.jobType}
                  />
                );
              })}
          </div>
        </div>
      </article> */}
      <article className="padding30">
        <div className="container">
          <div className="row join">
            <div className="col-md-12 text-center">
              <h3>Join Sanatan Setu Directory Now</h3>
              <p className="mb-5">
                We connect with targeted customers for greater business
                conversion
              </p>
            </div>
            <div className="col-md-6">
              <div className="item-1 item-1-bg">
                <h2>Looking for additional Business exposure?</h2>
                <p>
                  Tell us what kind of a job you are looking for and stay
                  updated with latest opportunities.
                </p>
                <p className="mb-0">
                  <a href="#" className="btn">
                    Register for free
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="item-1 item-2-bg">
                <h2>List your Job requirements or Search Jobs?</h2>
                <p>
                  Tell us what kind of a job you are looking for and stay
                  updated with latest opportunities.
                </p>
                <p className="mb-0">
                  <a href="#" className="btn">
                    Register for free
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <aside className="padding80 background-1">
        <div className="container">
          <div className="row how-it">
            <div className="col-md-12 text-center mb-5">
              <h3>How Sanatan Setu Works</h3>
              <p>
                Explore some of the best tips from around the world from our
                <br />
                partners and friends.lacinia viverra lectus.
              </p>
            </div>
            <div className="col-md-3">
              <div className="item">
                {" "}
                <span>1</span> <img src="assets/images/how1.png" />
                <h4>Create an account</h4>
                <p>
                  Fusce imperdiet ullamcorper metus eu fringilla. from around
                  the world from our partners and friends.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="item">
                {" "}
                <span>2</span> <img src="assets/images/how2.png" alt="" />
                <h4>List business, service, or jobs</h4>
                <p>
                  Fusce imperdiet ullamcorper metus eu fringilla. from around
                  the world from our partners and friends.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="item">
                {" "}
                <span>3</span> <img src="assets/images/how3.png" alt="" />
                <h4>Get exposure &amp; leads</h4>
                <p>
                  Fusce imperdiet ullamcorper metus eu fringilla. from around
                  the world from our partners and friends.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="item">
                {" "}
                <span>4</span> <img src="assets/images/how4.png" alt="" />
                <h4>Archive goles</h4>
                <p>
                  Fusce imperdiet ullamcorper metus eu fringilla. from around
                  the world from our partners and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
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
