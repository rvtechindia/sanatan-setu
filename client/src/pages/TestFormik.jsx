import React from "react";
import { Formik,ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";

const Basic = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {

      
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <section className="padding40 " style={{ marginTop: -90 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="submit-job-form">
              <div className="title">
                <i className="fas fa-align-justify"></i> General information
              </div>
              <div className="form">
                <div className="input-group">
                  <label>
                    Title <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label>
                    Tagline <span className="red">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tagline"
                    name="tagline"
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label>
                    Listing Category <span className="red">*</span>
                  </label>
                  <select onChange={handleChange} name="category">
                    <option>Please select Category</option>
                    {/* {category?.map((item) => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.businessCategory}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
                <div className="input-group">
                  <label>
                    Description <span className="red">*</span>
                  </label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="input-group">
                  <label>Listing Amenity</label>
                  <div className="col-md-12 mt-3">
                    {/* {!amenity && (
                      <div className="alert alert-warning ">
                        Please choose category to display available features
                      </div>
                    )}
                    {amenity?.map((item) => (
                      <div key={item._id} className="input-group">
                        <label>{item.title}</label>
                        <input type="checkbox" />
                      </div>
                    ))} */}
                  </div>
                </div>
                <div className="input-group">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    placeholder="e.g yourwebsite.com"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="submit-job-form">
              <div className="title">
                <i className="far fa-images"></i> Media
              </div>
              <div className="form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label>Logo</label>
                      <div className="file-area">
                        <input
                          type="file"
                          name="logo"
                          id="logo"
                          required="required"
                          multiple
                          // onChange={handleImage}
                        />
                        <div className="file-dummy">
                          <div className="success">
                            Great, your files are selected. Keep on.
                          </div>
                          <div className="default">
                            <i className="fas fa-upload"></i>
                            <br />
                            Add Image
                          </div>
                        </div>
                      </div>
                      <p className="small">
                        The image will be shown on listing cards.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label>Cover Image</label>
                      <div className="file-area">
                        <input
                          type="file"
                          name="cover"
                          id="cover"
                          required="required"
                          multiple
                          // onChange={handleImage}
                        />
                        <div className="file-dummy">
                          <div className="success">
                            Great, your files are selected. Keep on.
                          </div>
                          <div className="default">
                            <i className="fas fa-upload"></i>
                            <br />
                            Add Image
                          </div>
                        </div>
                      </div>
                      <p className="small">
                        The image will be shown on listing cards.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="submit-job-form">
              <div className="title">
                <i className="fas fa-dollar-sign"></i> Price Range{" "}
              </div>
              <div className="form">
                <div className="row">
                  <div className="col-md-4">
                    <div className="input-group">
                      <label>Price Range </label>
                      <select>
                        <option>Cheap</option>
                        <option>Medium</option>
                        <option>Premium</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 submit-job">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Save & Preview
            </button>
          </div>
        </div>
      </div>
    </section>
    )}
  </Formik>
);

export default Basic;
