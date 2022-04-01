import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//import utils
import { validateBusinessDetails } from "../utils/Validator";
import { notifyError, notifySuccess } from "../utils/toast";

///imports actions
import {
  getCategories,
  getAmenityByCategory,
  clearErrors,
} from "../redux/actions/categoryAction";
import { newCompany } from "../redux/actions/companyAction";

/// import components
import { Caption } from "../components/breadcrum/Caption";
import { Loader } from "../components/loader/Loader";
import Header from "../components/header/Header";
import BusinessInformation from "./Business/BusinessInformation";
import BusinessSocials from "./Business/BusinessSocials";
import Gallary from "./Business/Gallary";

const ListBusiness = ({ history }) => {
  const { category } = useSelector((state) => state.category);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { amenity } = useSelector((state) => state.amenity);
  const [selectCategory, setSelectCategory] = useState("");
  const dispatch = useDispatch();
  const [logo, setLogo] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [error, setError] = useState({});
  const errorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");

  useEffect(() => {
    dispatch(getCategories());

    if (!isAuthenticated) {
      notifyError("login first");
      history.push("/login?redirect=listbusiness");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(getAmenityByCategory(selectCategory));
  }, [selectCategory]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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

  const [address, setAddress] = useState({
    add: "",
    locality: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    landmark: "",
  });

  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  });

  const socialData = [];

  const [gallaryImage, setGallaryImage] = useState([]);
  const [gallaryTitle, setGallaryTitle] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    // setSelectCategory(e.target.value);
    // console.log(selectCategory);

    switch (name) {
      case "title":
        setRegistrationData({ ...registrationData, businessName: value });
        const error = validateBusinessDetails({
          ...registrationData,
          businessName: value,
        });
        setError(error);
        break;
      case "website":
        setRegistrationData({ ...registrationData, website: value });
        setError(
          validateBusinessDetails({ ...registrationData, website: value })
        );
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, founded: value });
      //   break;
      case "tagline":
        setRegistrationData({ ...registrationData, tagline: value });
        setError(
          validateBusinessDetails({ ...registrationData, tagline: value })
        );
        break;
      case "description":
        setRegistrationData({ ...registrationData, description: value });
        setError(
          validateBusinessDetails({ ...registrationData, description: value })
        );
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, companyType: value });
      //   break;
      case "category":
        setRegistrationData({ ...registrationData, category: value });
        setSelectCategory(value);
        setError(
          validateBusinessDetails({ ...registrationData, category: value })
        );
        break;
      // case "title":
      //   setRegistrationData({ ...registrationData, size: value });
      //   break;
    }
  };

  const setCompanyData = () => {
    setLoading(true);
    // const formData = new FormData();
    // formData.append("businessName", data.businessName);
    // formData.append("website", data.website);
    // formData.append("size", data.size);
    // formData.append("founded", data.founded);

    // formData.append("tagline", data.tagline);
    // formData.append("description", data.description);
    // formData.append("companyType", data.companyType);
    // formData.append("category", data.category);

    // logo.forEach((image) => {
    //   formData.append("logo", logo);
    // });

    // coverImage.forEach((image) => {
    //   formData.append("coverImage", coverImage);
    // });

    Object.keys(social).forEach((key) => {
      if (social[key] != "") {
        socialData.push({
          socialType: key,
          url: social[key],
        });
      }
    });

    registrationData.logo = logo;
    registrationData.coverImage = coverImage;
    registrationData.social = socialData;
    if (price) registrationData.price = price;

    const newData = {
      registrationData,
      address,
      gallary: {
        title: gallaryTitle,
        images: gallaryImage,
      },
    };

    return newData;
  };

  const handleImage = (e) => {
    const { name } = e.target;

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

  const handleSubmit = async () => {
    const error = validateBusinessDetails(registrationData);
    setError(error);

    if (Object.keys(error).length) {
      notifyError("Please fill the empty fields");
      window.scroll(0, 0);
      return;
    }
    const data = setCompanyData();
    console.log(data);
    await dispatch(newCompany(data));
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <Caption title="Add Business">
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
                      style={error.businessName && { border: "1px solid red" }}
                    />
                    {error.businessName && (
                      <label style={{ color: "red", fontSize: ".7rem" }}>
                        {error.businessName}
                      </label>
                    )}
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
                      style={error.tagline && { border: "1px solid red" }}
                    />
                    {error.tagline && (
                      <label style={{ color: "red", fontSize: ".7rem" }}>
                        {error.tagline}
                      </label>
                    )}
                  </div>
                  <div className="input-group">
                    <label>
                      Listing Category <span className="red">*</span>
                    </label>
                    <select
                      onChange={handleChange}
                      name="category"
                      style={error.category && { border: "1px solid red" }}
                    >
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
                      style={error.description && { border: "1px solid red" }}
                    ></textarea>
                    {error.description && (
                      <label style={{ color: "red", fontSize: ".7rem" }}>
                        {error.description}
                      </label>
                    )}
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
                  <div className="input-group">
                    <label>Website</label>
                    <input
                      type="text"
                      name="website"
                      placeholder="e.g yourwebsite.com"
                      onChange={handleChange}
                      style={error.website && { border: "1px solid red" }}
                    />
                    {error.website && (
                      <label style={{ color: "red", fontSize: ".7rem" }}>
                        {error.website}
                      </label>
                    )}
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
                        <select onChange={(e) => setPrice(e.target.value)}>
                          <option>Prefer to say</option>
                          <option value="Cheap">Cheap</option>
                          <option value="Medium">Medium</option>
                          <option value="Premium">Premium</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Gallary
              gallaryImage={gallaryImage}
              setGallaryImage={setGallaryImage}
              gallaryTitle={gallaryTitle}
              setGallaryTitle={setGallaryTitle}
            />
            <BusinessInformation address={address} setAddress={setAddress} />
            <BusinessSocials social={social} setSocial={setSocial} />

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
