import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Caption } from "../components/breadcrum/Caption";
import Header from "../components/header/Header";
import {
  getCategories,
  getAmenityByCategory,
  clearErrors,
} from "../redux/actions/categoryAction";

import { newCompany } from "../redux/actions/companyAction";

///imports

const ListBusiness = () => {
  const { category, loading, error } = useSelector((state) => state.category);
  const { amenity } = useSelector((state) => state.amenity);
  const [selectCategory, setSelectCategory] = useState("");
  const dispatch = useDispatch();
  const [logo, setLogo] = useState([]);
  const [coverImage, setCoverImage] = useState([]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getAmenityByCategory(selectCategory));
  }, [selectCategory]);

  const handleChange = (e) => {
    console.log(e.target.files);
    const { value, name } = e.target;
    // setSelectCategory(e.target.value);
    // console.log(selectCategory);

    switch (name) {
      case "title":
        setRegistrationData({ ...registrationData, businessName: value });
        break;
      case "website":
        setRegistrationData({ ...registrationData, website: value });
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, founded: value });
      //   break;
      case "tagline":
        setRegistrationData({ ...registrationData, tagline: value });
        break;
      case "description":
        setRegistrationData({ ...registrationData, description: value });
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, companyType: value });
      //   break;
      case "category":
        setRegistrationData({ ...registrationData, category: value });
        setSelectCategory(value);
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, size: value });
      //   break;
    }

    console.log(registrationData);
  };

  const handleSubmit = () => {
    const data = setCompanyData(registrationData, logo, coverImage);

    dispatch(newCompany(data));
  };

  const [registrationData, setRegistrationData] = useState({
    businessName: "",
    website: "",
    size: "100",
    founded: "1998",
    tagline: "",
    description: "",
    companyType: "PVT LTD",
    category: "",
  });

  const setCompanyData = (data, logo, coverImage) => {
    const formData = new FormData();
    formData.append("businessName", data.businessName);
    formData.append("website", data.website);
    formData.append("size", data.size);
    formData.append("founded", data.founded);

    formData.append("tagline", data.tagline);
    formData.append("description", data.description);
    formData.append("companyType", data.companyType);
    formData.append("category", data.category);

    logo.forEach((image) => {
      formData.append("logo", logo);
    });

    coverImage.forEach((image) => {
      formData.append("coverImage", coverImage);
    });

    return formData;
  };

  const handleImage = (e) => {
    const { name } = e.target;

    console.log(name)

    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          switch (name) {
            case "logo":
              setLogo((old) => [...old, reader.result]);
              break;
            case "cover":
              setCoverImage((old) => [...old, reader.result]);
              break;
          }
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <Caption title="List Business">
        <Header />
      </Caption>
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
                      {category?.map((item) => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.businessCategory}
                          </option>
                        );
                      })}
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
                      {!amenity && (
                        <div className="alert alert-warning ">
                          Please choose category to display available features
                        </div>
                      )}
                      {amenity?.map((item) => (
                        <div key={item._id} className="input-group">
                          <label>{item.title}</label>
                          <input type="checkbox" />
                        </div>
                      ))}
                    </div>
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
                            onChange={handleImage}
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
                            onChange={handleImage}
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
                        <label>Gallery Images </label>
                        <div className="file-area">
                          <input
                            type="file"
                            name="gallery"
                            id="gallery"
                            required="required"
                            multiple
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
                        <p className="small">Maximum file size: 64 MB. </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <label>Video</label>
                        <input
                          type="text"
                          placeholder="A link to a video about your company"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="submit-job-form">
                <div className="title">
                  <i className="fas fa-headphones"></i> Business information{" "}
                </div>
                <div className="form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <label>Listing Region </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-group">
                        <label>Address</label>
                        <input
                          type="text"
                          placeholder="e.g 34 Wigmore Street"
                        />
                      </div>
                      <div className="input-group">
                        <label>State</label>
                        <select>
                          <option>Please select Country</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>City</label>
                        <input type="text" placeholder="51.4980073" />
                      </div>
                      <div className="input-group">
                        <label>Pin</label>
                        <input type="text" placeholder="e.g 110001" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <label>Location</label>
                        <input
                          type="text"
                          placeholder="e.g 34 Wigmore Street, London"
                        />
                      </div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1639134857889!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="input-group">
                      <label>Phone</label>
                      <input type="text" placeholder="e.g +84-669-996" />
                    </div>
                    <div className="input-group">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="e.g youremail@email.com"
                      />
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
            </div>
            <div className="col-md-12">
              <div className="submit-job-form">
                <div className="title">
                  <i className="fas fa-share-alt"></i> Business Social{" "}
                </div>
                <div className="form">
                  <div className="input-group">
                    <label>Facebook Profile Link</label>
                    <input type="text" placeholder="https://facebook.com/" />
                  </div>
                  <div className="input-group">
                    <label>Twiter Profile Link</label>
                    <input type="text" placeholder="https://twitter.com/" />
                  </div>
                  <div className="input-group">
                    <label>Instagram Profile Link </label>
                    <input type="text" placeholder="https://instagram.com/" />
                  </div>
                  <div className="input-group">
                    <label>YouTube Channel Link </label>
                    <input type="text" placeholder="https://youtube.com/" />
                  </div>
                  <div className="input-group">
                    <label>LinkedIn Profile Link </label>
                    <input type="text" placeholder="https://linkedin.com/" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="submit-job-form">
                <div className="title">
                  <i className="far fa-clock"></i> Business hour
                </div>
                <div className="form">
                  <div className="input-group">
                    <label>Hours of Operation</label>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Monday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Tuesday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Wednesday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Thursday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Friday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Saturday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
                  </div>
                  <div className="row business">
                    <div className="col-md-1 pt-2">Sunday</div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select>
                          <option>From</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="input-group mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Enter Hours
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Open All Days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Closed All Days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-11 offset-md-1"></div>
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
    </>
  );
};

export default ListBusiness;
